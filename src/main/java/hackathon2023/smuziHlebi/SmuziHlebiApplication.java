package hackathon2023.smuziHlebi;

import org.hibernate.sql.model.ModelMutationLogging;
import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SmuziHlebiApplication {

	public static void main(String[] args) {
		SpringApplication.run(SmuziHlebiApplication.class, args);
	}

	@Bean
	public ModelMapper modelMapper(){
		return new ModelMapper();
	}
}
