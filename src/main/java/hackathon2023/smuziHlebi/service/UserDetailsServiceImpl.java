package hackathon2023.smuziHlebi.service;

import hackathon2023.smuziHlebi.domain.entity.User;
import hackathon2023.smuziHlebi.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;


import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
       User user = userRepository.findByUsername(username).orElseThrow(() ->
               new EntityNotFoundException("Request not found with username: " + username));

       return new org.springframework.security.core.userdetails.User(
               user.getUsername(),
               user.getPassword(),
               getAuthorities(user)
       );
    }

    private List<GrantedAuthority> getAuthorities(User user){
        List<GrantedAuthority> authorities = new ArrayList<>();
        for(int i = 0; i < user.getRoles().size(); i ++){
            authorities.add( new SimpleGrantedAuthority(user.getRoles().get(i).getName()));
        }
        return authorities;
    }
}
