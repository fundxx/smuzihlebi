package hackathon2023.smuziHlebi.controller;

import hackathon2023.smuziHlebi.domain.dto.JwtResponse;
import hackathon2023.smuziHlebi.domain.dto.RefreshRequest;
import hackathon2023.smuziHlebi.domain.dto.UserRegistrationAuthentication;
import hackathon2023.smuziHlebi.security.service.AuthService;
import hackathon2023.smuziHlebi.utils.exception.AuthException;
import hackathon2023.smuziHlebi.utils.exception.ErrorResponse;
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
    public ResponseEntity<JwtResponse> registration(@RequestBody UserRegistrationAuthentication authentication){
        return ResponseEntity.ok(authService.registration(authentication));
    }

    @PostMapping("/signIn")
    public ResponseEntity<JwtResponse> login(@RequestBody UserRegistrationAuthentication authentication){
        return ResponseEntity.ok(authService.login(authentication));
    }

    @PostMapping("/accessToken")
    public ResponseEntity<JwtResponse> getAccessToken(@RequestBody RefreshRequest refreshJwtRequest){
        return ResponseEntity.ok(authService.getAccessToken(refreshJwtRequest.getRefreshToken()));
    }

    @PostMapping("/refresh")
    public ResponseEntity<JwtResponse> refresh(@RequestBody RefreshRequest refreshJwtRequest){
        return ResponseEntity.ok(authService.refresh(refreshJwtRequest.getRefreshToken()));
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
