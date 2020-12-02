package com.example.demo.controller;

import com.example.demo.entities.Nid;
import com.example.demo.entities.Passport;
import com.example.demo.entities.User;
import com.example.demo.repository.INidRepository;
import com.example.demo.repository.IPassportRepository;
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

  @Autowired
  private IPassportRepository iPassportRepository;

  /***
   *
   * Nid
   */
  @GetMapping("/nids")
  public List<Nid> getNids() {
    return iNidRepository.findAll();
  }

  @GetMapping("/nids/{id}")
  public Nid getNid(@PathVariable Long id) {
    return iNidRepository.findById(id).orElseThrow();
  }

  @PostMapping("/nid")
  public Nid createNid(@RequestBody Nid newNid) {
    return iNidRepository.save(newNid);
  }

  @DeleteMapping("/nids/{id}")
  public boolean deleteNid(@PathVariable Long id) {
    iNidRepository.deleteById(id);
    return true;
  }

  @PutMapping("/nid")
  public Nid updateNid(@RequestBody Nid newNid) {
    return iNidRepository.save(newNid);
  }

  /***
   *
   * Passport
   */
  @GetMapping("/passports")
  public List<Passport> getPassports() {
    return iPassportRepository.findAll();
  }

  @GetMapping("/passports/{id}")
  public Passport getPassport(Long id) {
    return iPassportRepository.findById(id).orElseThrow();
  }

  @PostMapping("/passport")
  public Passport createPassport(@RequestBody Passport newPassport) {
    return iPassportRepository.save(newPassport);
  }

  @DeleteMapping("/passports/{id}")
  public boolean deletePassport(@PathVariable Long id) {
    iPassportRepository.deleteById(id);
    return true;
  }

  @PutMapping("/passport")
  public Passport updatePassport(@RequestBody Passport newPassport) {
    return iPassportRepository.save(newPassport);
  }

  /***
   *
   * User
   */
  @GetMapping("/users")
  public List<User> getUsers() {
    return iUserRepository.findAll();
  }

  @GetMapping("/user/{id}")
  public User getUser(@PathVariable Long id) {
    return iUserRepository.findById(id).orElseThrow();
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
