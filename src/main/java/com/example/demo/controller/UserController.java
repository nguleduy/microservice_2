package com.example.demo.controller;

import com.example.demo.entities.Nid;
import com.example.demo.entities.Passport;
import com.example.demo.entities.User;
import com.example.demo.repository.INidRepository;
import com.example.demo.repository.IPassportRepository;
import com.example.demo.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

  private Map<String, String> errors;


  /***
   *
   * Nid
   */
  @GetMapping("/nids")
  public List<Nid> getNids() {
    return iNidRepository.findAll();
  }

  @GetMapping("/nids/{nid}")
  public Nid getNid(@PathVariable String nid) {
    return iNidRepository.findByNid(nid);
  }

  @PostMapping("/nid")
  public ResponseEntity<Object> createNid(@RequestBody @Valid Nid newNid, BindingResult bindingResult) {
    if (bindingResult.hasErrors()) {
      errors = new HashMap<>();
      for (FieldError error : bindingResult.getFieldErrors()) {
        errors.put(error.getField(), error.getDefaultMessage());
      }
      return new ResponseEntity<>(errors, HttpStatus.NOT_ACCEPTABLE);
    }

    Nid n = iNidRepository.findByNid(newNid.getNid());
    if (n != null) {
      return new ResponseEntity<>(HttpStatus.CONFLICT);
    }

    return new ResponseEntity<>(iNidRepository.save(newNid), HttpStatus.OK);
  }

  @DeleteMapping("/nids/{nid}")
  public boolean deleteNid(@PathVariable String nid) {
    iNidRepository.deleteById(nid);
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

  @GetMapping("/passports/{ppid}")
  public Passport getPassport(String ppid) {
    return iPassportRepository.findById(ppid).orElseThrow();
  }

  @PostMapping("/passport")
  public ResponseEntity<Object> createPassport(@RequestBody @Valid Passport newPassport, BindingResult bindingResult) {
    if (bindingResult.hasFieldErrors()) {
      errors = new HashMap<>();
      for (FieldError error : bindingResult.getFieldErrors()) {
        errors.put(error.getField(), error.getDefaultMessage());
      }

      return new ResponseEntity<>(errors, HttpStatus.NOT_ACCEPTABLE);
    }

    Passport passportPpid = iPassportRepository.findByPpid(newPassport.getPpid());
    Passport passportNid = iPassportRepository.findByNid(newPassport.getNid());

    if (passportPpid != null || passportNid != null) {
      return new ResponseEntity<>(HttpStatus.CONFLICT);
    }

    return new ResponseEntity<>(iPassportRepository.save(newPassport), HttpStatus.OK);
  }

  @DeleteMapping("/passports/{ppid}")
  public boolean deletePassport(@PathVariable String ppid) {
    iPassportRepository.deleteById(ppid);
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
