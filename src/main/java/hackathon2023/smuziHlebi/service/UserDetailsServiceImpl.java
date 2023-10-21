package hackathon2023.smuziHlebi.service;

import hackathon2023.smuziHlebi.domain.entity.Role;
import hackathon2023.smuziHlebi.domain.entity.User;
import hackathon2023.smuziHlebi.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;


import lombok.RequiredArgsConstructor;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
       User user = userRepository.findByUsername(username).orElseThrow(() ->
               new EntityNotFoundException("Request not found with username: " + username));

       return new org.springframework.security.core.userdetails.User(
               user.getUsername(),
               user.getPassword(),
               getAuthorities(user.getRoles())
       );
    }

    private List<GrantedAuthority> getAuthorities(List<Role> roles){
        List<GrantedAuthority> authorities = new ArrayList<>();
        for (Role role : roles) {
            authorities.add(new SimpleGrantedAuthority(role.getName()));
        }
        return authorities;
    }
}
