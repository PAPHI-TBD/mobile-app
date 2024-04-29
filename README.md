# Mingley - App

## Project Description
Mingley aims to help people find friends, events, and a community in new areas. We hope to foster safe and spontaneous hangouts for it's users.

**Link to project:* (insert app link here)

## Install Dependencies:
- cd Mingley
- npm install

## How to run the application (VSCode):
- cd Mingley
- npm add expo
- sudo npx expo start
  - First time running install expo@50.0.17
- press w (for web version)
  - inspect then set dimensions to iPhone 14 Max


## Development and CI/CD Pipeline

## Pushing and Deploying Code
- Make sure to pull first before pushing

## Branches Overview
The development pipeline is structured around the branches within the repository. Each branch represents a stage of development, allowing for parallel workstreams and controlled integration.

## Initial Development
At the outset, development is segmented into four main branches, each corresponding to a key aspect of the application:

- Login/Registration Page(s)
- Live Page
- Feed Friends Page
- Feed Event Discovery Page
- Profile Page
- Chat Page
- Post Page
- Request to Mingle Page

## Development Integration
The `development` branch consolidates changes from the initial four branches, representing the first iteration of the complete application. QA procedures, including sanity and regression testing if necessary, are executed to identify and resolve bugs.
All modifications originate from the lower-level feature branches and are subsequently merged into `development` to ensure alignment.

## Staging
Once all identified bugs are resolved and the iteration reaches a stable state, changes are merged into the `staging` branch. This branch mirrors the production environment, with the inclusion of committed functionalities ready for deployment.

## Production Deployment
Upon decision, the `staging` branch is merged into the `production` branch, marking the release for deployment. With each push to the `production` branch, the CI/CD process is automatically initiated. This triggers deployment to the live destination, ensuring seamless updates to the production environment.

## Tech Stack
- App
  - React Native
    - Animations:
      - https://github.com/software-mansion/react-native-reanimated
  - Echo
  - Firebase

***Why was this teck stack chosen?***

For the Front-End we initially we planned to use ***SwiftUI*** to start app development, but we found that some developers on our team ***did not have*** a ***MAC OS*** and we decided it was too ***inconvenient*** for them to create a VM and set up an environment. 

After some research, Joshua De Chavez led initiatives to use ***React Native*** for app development since:
- ***Compatible*** with ***iOS*** and ***Android*** systems
- Can be compiled and built through ***Echo***
- The homepage website is being ***refactored*** from ***HTML*** and ***CSS*** into ***React*** so it will be ***easier*** to ***transition*** to ***React Native*** after final development

For the backend we decided to use...

Finally we decided to use Microsoft Azure for...

## Architecture
- ***Monolithic Architecture***
  - Simplicity: The team is relatively small and less experienced with distributed systems. This model makes it simpler to develop, deploy, and maintain the codebase.
  - Rapid Development: Allows faster initial development since there's less overhead in managing multiple services and coordinating between them.
  - Tight Integration: With all components tightly integrated within the same codebase, it can be easier to maintain consistency and ensure smooth interactions between different parts of the application.
  - Resource Efficiency: For smaller applications with modest scalability requirements, a monolithic architecture may be more resource-efficient as it avoids the overhead of managing multiple services.

## Optimizations (optional)

TBD

## Lessons Learned
- TBD

## Credits
Founders:
- Joshua De Chavez (Full Stack Developer + Project Manager)
- Clare Shen (Backend Developer)
- Joshua Sam Badshah (Business Team Lead)

## Future Considerations
- Microservices Architecture
  - We could shift the code to follow this model for:
    -  Scalability: Different components of your application scale independently based on usage patterns, for better scalability and flexibility.
    -  Technology Diversity: Cater to different technologies or frameworks for different parts of your application, for flexibility in technology choices for each service.
    -  Resilience: Microservices promote fault isolation, meaning that issues in one service are less likely to impact the entire application, enhancing reliability and resilience.
    -  Team Structure: If the development team is expands and we can divide it into smaller, autonomous teams responsible for individual services.

Members: 
- Software Development Team
  - Full Stack Team
    - Joshua De Chavez (Team Lead) (Project Manager)
      - Brooke
      - Johnnie (Full Stack Developer) 
      - Leo
      - Maya
      - Shireen
      - Kailer
      - Sami
      - Will
  - Front-End Team
    - Heba (Team Lead)
      - Arissa
      - Precious
      - Megha
      - Jeanie
      - Alyza
  - Back-End Team
    - Deven Shah (Team Lead)
      - Insert Members
  - Back-End Team
    - Clare Shen (Team Lead)
      - Insert Members

- UI/UX Team
  - Team Leads
    - Sammie Chau
    - Taravee 
  - Members
    - Hsin
    - Kat
    - Michelle

- Business Team
  - Joshua Badshah
  - Apoorva
  - Matt Dizon
## Licenses
You can not use any code from the Mingley organization. 
