package hackathon2023.smuziHlebi.service;

import hackathon2023.smuziHlebi.repository.TeamRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class TeamService {


    private final TeamRepository teamRepository;
}
