package com.example.demo;

import com.example.demo.entities.Nid;
import com.example.demo.entities.Passport;
import com.example.demo.entities.User;
import com.example.demo.repository.INidRepository;
import com.example.demo.repository.IPassportRepository;
import com.example.demo.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JosephApplication implements CommandLineRunner {

  @Autowired
  private IUserRepository iUserRepository;

  @Autowired
  private IPassportRepository iPassportRepository;

  @Autowired
  private INidRepository iNidRepository;

  public static void main(String[] args) {
    SpringApplication.run(JosephApplication.class, args);
  }

  @Override
  public void run(String... args) throws Exception {
    iUserRepository.save(new User("ABC", "XYZ"));

    iPassportRepository.save(new Passport("ppid","1234567891011","nguleduy@gmail.com","Joseph","Le","05-12-1989"));

    iNidRepository.save(new Nid("1234567891011","Joseph","Le","ppid","05-12-1989"));
  }
}
