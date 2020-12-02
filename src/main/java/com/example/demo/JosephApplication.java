package com.example.demo;

import com.example.demo.entities.User;
import com.example.demo.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JosephApplication implements CommandLineRunner {

  @Autowired
  private IUserRepository IUserRepository;

  public static void main(String[] args) {
    SpringApplication.run(JosephApplication.class, args);
  }

  @Override
  public void run(String... args) throws Exception {
    IUserRepository.save(new User("one", "one"));
    IUserRepository.save(new User("two", "one"));
    IUserRepository.save(new User("three", "one"));
  }
}
