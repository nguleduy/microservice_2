package com.example.demo.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

@Entity
@Setter
@Getter
@ToString
@NoArgsConstructor
public class Nid {

  @Id
  private Long nid;

  @NotBlank(message = "Enter your first name")
  private String fName;

  @NotBlank(message = "Enter your last name")
  private String lName;

  @NotBlank(message = "Enter your name")
  private String ppid;

  @NotBlank(message = "Enter your name")
  private String birthdate;
}
