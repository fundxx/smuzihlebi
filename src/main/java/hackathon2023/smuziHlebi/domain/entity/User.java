package hackathon2023.smuziHlebi.domain.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;
import org.hibernate.annotations.Fetch;

import java.util.List;

@Entity
@Table(name = "users")
@NoArgsConstructor
@Setter
@Getter
public class User {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "email")
    @NonNull
    private String email;

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    @Column(name = "password")
    @NonNull
    private String password;

    @Column(name = "username")
    @NonNull
    private String username;

    @ManyToMany()
            @JoinTable(
                    name = "user_role",
                    joinColumns = @JoinColumn(name = "user_id"),
                    inverseJoinColumns = @JoinColumn(name = "role_id")
            )
    private List<Role> roles;

    @ManyToMany(mappedBy = "users")
    private List<Team> teams;
}
