package hackathon2023.smuziHlebi.service;

import hackathon2023.smuziHlebi.domain.dto.UserRegistrationAuthentication;
import hackathon2023.smuziHlebi.domain.entity.Role;
import hackathon2023.smuziHlebi.domain.entity.User;
import hackathon2023.smuziHlebi.repository.RoleRepository;
import hackathon2023.smuziHlebi.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final Logger log = LoggerFactory.getLogger(UserService.class);

    private final ModelMapper modelMapper;

    private final PasswordEncoder encoder;

    private final RoleRepository roleRepository;

    public Optional<User> findOne(String username) {
        return userRepository.findByUsername(username);
    }

    @Transactional
    public User save(UserRegistrationAuthentication authentication) {
        log.debug("Request to save employee : {}", authentication);
        User user = modelMapper.map(authentication,User.class);
        user.setPassword(encoder.encode(authentication.getPassword()));
        user.setUsername(generateUsername(authentication));
        Role role = roleRepository.findByName("ROLE_PARTICIPANT").get();
        user.setRoles(new ArrayList<>(Collections.singletonList(role)));
        userRepository.save(user);
        return user;
    }

    private String generateUsername(UserRegistrationAuthentication authentication){
        StringBuilder username = new StringBuilder();
        return username.append(authentication.getName()).append("_")
                .append(authentication.getSurname().charAt(0)).append("_")
                .append(userRepository.count() + 1)
                .toString();
    }
}
