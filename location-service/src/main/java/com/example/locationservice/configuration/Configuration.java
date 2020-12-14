package com.example.locationservice.configuration;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties("location-service")
@Getter
@Setter
public class Configuration {

  private double latitude;
  private double longitude;
}
