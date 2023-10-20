package hackathon2023.smuziHlebi.repository;

import hackathon2023.smuziHlebi.domain.entity.Match;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;

public interface MatchRepository extends JpaRepository<Match, BigInteger> {
}
