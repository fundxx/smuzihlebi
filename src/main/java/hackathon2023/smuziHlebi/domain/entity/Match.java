package hackathon2023.smuziHlebi.domain.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigInteger;
import java.util.List;

@Entity
@Table(name = "team")
@NoArgsConstructor
@Setter
@Getter
public class Match {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private BigInteger id;

    @Column(name = "name")
    private String name;

    @Column(name = "first_team_score")
    private Integer scoreFirstTeam;

    @Column(name = "second_team_score")
    private Integer scoreSecondTeam;

    @Column(name = "winner_team_id")
    private Integer winnerId;

    @ManyToMany
    @JoinTable(name = "team_match",
                joinColumns = @JoinColumn(name = "match_id"),
                inverseJoinColumns = @JoinColumn(name = "team_id"))
    private List<Team> teams;
}
