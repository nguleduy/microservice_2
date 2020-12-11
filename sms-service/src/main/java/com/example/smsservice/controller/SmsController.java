package com.example.smsservice.controller;

import com.example.smsservice.entities.Sms;
import com.example.smsservice.repository.ISmsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class SmsController {

  @Autowired
  private ISmsRepository iSmsRepository;

  /*
   * 		sms service
   * */

  @GetMapping("/sms")
  public List<Sms> getSms() {
    return iSmsRepository.findAll();
  }
}
