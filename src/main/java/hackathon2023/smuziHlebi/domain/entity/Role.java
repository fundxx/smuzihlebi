package hackathon2023.smuziHlebi.domain.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "role")
@NoArgsConstructor
@Setter
@Getter
public class Role {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    @NonNull
    private String name;

    @ManyToMany(mappedBy = "roles")
    private List<User> users;

    public Role(String name){
        this.name = name;
    }
}
