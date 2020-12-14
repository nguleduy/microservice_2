package com.example.locationservice.controller;

import com.example.locationservice.configuration.Configuration;
import com.example.locationservice.entity.Location;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LocationController {

  @Autowired
  private Configuration configuration;

  @GetMapping("/location")
  public Location getLocation() {
    return new Location(configuration.getLatitude(), configuration.getLongitude());
  }
}
