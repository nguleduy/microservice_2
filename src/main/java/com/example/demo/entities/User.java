package com.example.demo.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Setter
@Getter
@ToString
@NoArgsConstructor
public class User {

  @Id
  @GeneratedValue
  private Long id;

  private String fName;

  private String lName;

  public User(String fName, String lName) {
    this.fName = fName;
    this.lName = lName;
  }
}
