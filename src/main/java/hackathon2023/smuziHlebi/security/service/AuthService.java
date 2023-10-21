package hackathon2023.smuziHlebi.security.service;

import hackathon2023.smuziHlebi.domain.dto.JwtResponse;
import hackathon2023.smuziHlebi.domain.dto.UserRegistrationAuthentication;
import hackathon2023.smuziHlebi.domain.entity.Role;
import hackathon2023.smuziHlebi.domain.entity.User;
import hackathon2023.smuziHlebi.security.jwt.JwtCore;
import hackathon2023.smuziHlebi.service.UserService;
import io.jsonwebtoken.Claims;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;


import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class AuthService {

    private final JwtCore jwtCore;
    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final PasswordEncoder encoder;


    public JwtResponse registration(UserRegistrationAuthentication registration){
        User user = userService.save(registration);
        String accessToken = jwtCore.generateAccessToken(user);
        String refreshToken = jwtCore.generateRefreshToken(user);
        return new JwtResponse(accessToken,refreshToken);
    }

    public JwtResponse login(UserRegistrationAuthentication authentication){
        final User user = userService.findOne(authentication.getEmail()).orElseThrow(() ->
                new hackathon2023.smuziHlebi.utils.exception.AuthException("This email dont exists"));
        if(encoder.matches(authentication.getPassword(), user.getPassword())){
            final String accessToken = jwtCore.generateAccessToken(user);
            final String refreshToken = jwtCore.generateRefreshToken(user);
            return new JwtResponse(accessToken,refreshToken);
        } else throw new hackathon2023.smuziHlebi.utils.exception.AuthException("This password incorrect");
    }

    public JwtResponse getAccessToken(String refreshToken){
        return generateAccessTokenOrRefresh(refreshToken,"getAccessToken");
    }

    public JwtResponse refresh(String refreshToken){
        return generateAccessTokenOrRefresh(refreshToken,"refresh");
    }

    private JwtResponse generateAccessTokenOrRefresh(String refreshToken, String action){
        if(jwtCore.validateRefreshToken(refreshToken)){
            final Claims claims = jwtCore.extractRefreshClaims(refreshToken);
            final String username = claims.getSubject();

                final List<String> namesRoles = (List<String>) claims.get("role");

            if(userService.findOne(username).isEmpty()){
                throw new EntityNotFoundException("Employee with this username does not exists");
            }

            // Можно удалить так как это проверка из другого проекта ^

            List<Role> roles = new ArrayList<>();
            User userForJwt = new User();

            for (String namesRole : namesRoles) {
                roles.add(new Role(namesRole));
            }
            userForJwt.setUsername(username);
            userForJwt.setRoles(roles);
            final String accessToken = jwtCore.generateAccessToken(userForJwt);
            if (action.equals("refresh")){
                final String newRefreshToken = jwtCore.generateRefreshToken(userForJwt);
                return new JwtResponse(accessToken,newRefreshToken);
            } else {
                return new JwtResponse(accessToken,null);
            }
        }
        throw new hackathon2023.smuziHlebi.utils.exception.AuthException("Invalid refreshToken");
    }

}
