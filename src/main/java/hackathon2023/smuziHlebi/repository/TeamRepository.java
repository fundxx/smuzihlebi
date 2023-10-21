package hackathon2023.smuziHlebi.repository;

import hackathon2023.smuziHlebi.domain.entity.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;

@Repository
public interface TeamRepository extends JpaRepository<Team, Long> {

}
