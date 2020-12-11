package com.example.userauthentication.message.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoginForm {

  @NotBlank
  @Size(min = 3, max = 60)
  private String username;

  @NotBlank
  @Size(min = 6, max = 40)
  private String password;

}
