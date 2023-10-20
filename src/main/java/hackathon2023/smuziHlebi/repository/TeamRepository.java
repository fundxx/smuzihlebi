package hackathon2023.smuziHlebi.repository;

import hackathon2023.smuziHlebi.domain.entity.Team;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;

public interface TeamRepository extends JpaRepository<Team, BigInteger> {

}
