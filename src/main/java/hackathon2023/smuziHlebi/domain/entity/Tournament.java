package hackathon2023.smuziHlebi.domain.entity;

import hackathon2023.smuziHlebi.domain.enums.StatusTournament;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;

import java.math.BigInteger;
import java.util.List;

@Entity
@Table(name = "tournament")
@NoArgsConstructor
@Setter
@Getter
public class Tournament {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private BigInteger id;

    @Column(name = "name")
    @NonNull
    private String name;

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private StatusTournament status;

    @Column(name = "id_creator")
    private BigInteger idCreator;

    @OneToMany(mappedBy = "tournament")
    private List<Team> teams;
}
