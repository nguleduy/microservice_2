package com.example.demo.repository;

import com.example.demo.entities.Passport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPassportRepository extends JpaRepository<Passport, String> {

  Passport findByPpid(String ppid);

  Passport findByNid(String nid);
}
