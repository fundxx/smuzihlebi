package hackathon2023.smuziHlebi.domain.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.context.annotation.EnableMBeanExport;

import java.math.BigInteger;
import java.util.List;

@Entity
@Table(name = "team")
@NoArgsConstructor
@Setter
@Getter
public class Role {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private BigInteger id;

    @Column(name = "name")
    @NonNull
    private String name;

    @ManyToMany(mappedBy = "roles")
    private List<User> users;
}
