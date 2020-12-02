package com.example.demo.controller;

import com.example.demo.entities.Nid;
import com.example.demo.entities.User;
import com.example.demo.repository.INidRepository;
import com.example.demo.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class UserController {

  @Autowired
  private IUserRepository iUserRepository;

  @Autowired
  private INidRepository iNidRepository;

  @GetMapping("/nids")
  public List<Nid> getNids() {
    return iNidRepository.findAll();
  }

  @GetMapping("/nids/{nid}")
  public Nid getNid(@PathVariable String nid) {
    return iNidRepository.findById(nid).get();
  }

  @GetMapping("/users")
  public List<User> getUsers() {
    return iUserRepository.findAll();
  }

  @GetMapping("/user/{id}")
  public User getUser(@PathVariable Long id) {
    return iUserRepository.findById(id).get();
  }

  @DeleteMapping("/user/{id}")
  public boolean deleteUser(@PathVariable Long id) {
    iUserRepository.deleteById(id);
    return true;
  }

  @PutMapping("/user")
  public User updateUser(@RequestBody User user) {
    return iUserRepository.save(user);
  }

  @PostMapping("/user")
  public User createUser(@RequestBody User user) {
    return iUserRepository.save(user);
  }
}
