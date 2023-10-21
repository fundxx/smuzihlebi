package hackathon2023.smuziHlebi.service;

import hackathon2023.smuziHlebi.domain.entity.Tournament;
import hackathon2023.smuziHlebi.repository.TournamentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class TournamentService {

    private final TournamentRepository tournamentRepository;
}
