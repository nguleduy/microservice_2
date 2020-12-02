package com.example.demo.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;

@Entity
@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Passport implements Serializable {

  @Id
  private String nid;

  @Id
  @Email(message = "Enter a valid email")
  @NotBlank(message = "Enter your email")
  private String email;

  @NotBlank(message = "Enter your first name")
  private String fName;

  @NotBlank(message = "Enter your last name")
  private String lName;

  @NotBlank(message = "Enter your ppid")
  private String ppid;

  @NotBlank(message = "Enter your birthdate")
  private String birthdate;
}
