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
import javax.validation.constraints.Size;
import java.io.Serializable;

@Entity
@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Passport implements Serializable {

  private static final long serialVersionUID = 1L;

  @Id
  @NotBlank(message = "Enter your Passport Number")
  private String ppid;

  @Size(min = 13, max = 18, message = "Nid digit length min 13 & less 18")
  @NotBlank(message = "Enter Nid Number")
  private String nid;

  @Email(message = "Enter a valid email")
  @NotBlank(message = "Enter your email")
  private String email;

  @NotBlank(message = "Enter your first name")
  private String firstName;

  @NotBlank(message = "Enter your last name")
  private String lastName;

  @NotBlank(message = "Enter your DoB")
  private String birthdate;
}
