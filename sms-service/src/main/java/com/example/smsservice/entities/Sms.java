package com.example.smsservice.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Entity
@Table(name = "sms")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Sms implements Serializable {

  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue
  private Long id;

  @Size(min = 20, max = 160, message = "Message length must be between 20 and 160")
  private String message;

  private String date;

  public Sms(String message, String date) {
    this.message = message;
    this.date = date;
  }
}
