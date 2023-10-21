package hackathon2023.smuziHlebi.controller;

import hackathon2023.smuziHlebi.domain.dto.JwtResponse;
import hackathon2023.smuziHlebi.domain.dto.RefreshRequest;
import hackathon2023.smuziHlebi.domain.dto.UserRegistrationAuthentication;
import hackathon2023.smuziHlebi.security.service.AuthService;
import hackathon2023.smuziHlebi.utils.exception.ErrorResponse;
import jakarta.security.auth.message.AuthException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/signUp")
    public JwtResponse registration(@RequestBody UserRegistrationAuthentication authentication){
        return authService.registration(authentication);
    }

    @PostMapping("/signIn")
    public JwtResponse login(@RequestBody UserRegistrationAuthentication authentication){
        return authService.login(authentication);
    }

    @PostMapping("/accessToken")
    public JwtResponse getAccessToken(@RequestBody RefreshRequest refreshJwtRequest){
        return authService.getAccessToken(refreshJwtRequest.getRefreshToken());
    }

    @PostMapping("/refresh")
    public JwtResponse refresh(@RequestBody RefreshRequest refreshJwtRequest){
        return authService.refresh(refreshJwtRequest.getRefreshToken());
    }

    @ExceptionHandler
    private ResponseEntity<ErrorResponse> handAuthException(AuthException authException){
        ErrorResponse response = new ErrorResponse(
                authException.getMessage(),
                System.currentTimeMillis()
        );
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }
}
