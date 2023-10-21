package hackathon2023.smuziHlebi.domain.dto;



import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRegistrationAuthentication {

    @Email
    private String email;

    @NotEmpty
    private String password;

    private String name;

    private String surname;
}
