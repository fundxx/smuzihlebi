package hackathon2023.smuziHlebi.domain.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;

import java.math.BigInteger;
import java.util.List;

@Entity
@Table(name = "team")
@NoArgsConstructor
@Setter
@Getter
public class Team {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    @NonNull
    private String name;

    @ManyToOne
    @JoinColumn(
            name = "id_tournament",
            referencedColumnName = "id"
    )
    private Tournament tournament;

    @ManyToMany()
    @JoinTable(name = "user_team",
                joinColumns = @JoinColumn(name = "team_id"),
                inverseJoinColumns = @JoinColumn(name = "user_id"))
    private List<User> users;

    @ManyToMany(mappedBy = "teams")
    private List<Match> matches;
}
