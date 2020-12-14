package com.example.smsservice.repository;

import com.example.smsservice.entities.Sms;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ISmsRepository extends JpaRepository<Sms, Long> {

  Sms findById(Integer id);
}
