package com.example.demo.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Entity
@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@IdClass(Nid.class)
public class Nid implements Serializable {

  private static final long serialVersionUID = 1L;

  @Id
  @NotBlank(message = "Enter NID Number")
  @Size(min = 13, max = 18, message = "Enter a valid NID Number")
  private String nid;

  @NotBlank(message = "Enter your first name")
  private String fName;

  @NotBlank(message = "Enter your last name")
  private String lName;

  @NotBlank(message = "Enter your ppid")
  private String ppid;

  @NotBlank(message = "Enter your birthdate")
  private String birthdate;
}
