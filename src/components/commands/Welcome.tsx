import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
        _____ _    ____  ____  _____ _____ _   _          _  ___   _    _    _   _ 
        |  ___/ \  |  _ \|  _ \| ____| ____| \ | |        | |/ / | | |  / \  | \ | |
        | |_ / _ \ | |_) | | | |  _| |  _| |  \| |        | ' /| |_| | / _ \ |  \| |
        |  _/ ___ \|  _ <| |_| | |___| |___| |\  |        | . \|  _  |/ ___ \| |\  |
        |_|/_/   \_\_| \_\____/|_____|_____|_| \_|        |_|\_\_| |_/_/   \_\_| \_|
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
            _____ _    ____  ____  _____ _____ _   _          _  ___   _    _    _   _ 
            |  ___/ \  |  _ \|  _ \| ____| ____| \ | |        | |/ / | | |  / \  | \ | |
            | |_ / _ \ | |_) | | | |  _| |  _| |  \| |        | ' /| |_| | / _ \ |  \| |
            |  _/ ___ \|  _ <| |_| | |___| |___| |\  |        | . \|  _  |/ ___ \| |\  |
            |_|/_/   \_\_| \_\____/|_____|_____|_| \_|        |_|\_\_| |_/_/   \_\_| \_|
              `}             
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.3.1)</div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/KRiPPto99/terminal-portfolio">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                      ..........................................
                      .......................:-=+*##*-..........
                      .................-+*#%@@@@@@#-............
                      ..........:+:..=%@@@@@@@@@*:..............
                      ........=%%:.:*@@@@@@@@@@#-#@@@@@@#=:.....
                      .....:+@@%::-%@@@@@@@@@@@@@@@@@+:.........
                      ....:*@@@@**@@@@@@@@@@@@@@@@@#:...........
                      ....-@@@@@@@@@@@@@@@@@@@@@@%*:............
                      ...:*@@@@@@@@@@@@@@@@@@@@@@@#:............
                      :..-@@@@@@@@@@@@@@@@@@@@@@@@@*............
                      .*-:+@@@@@@@@@@@@@@@@@@@@@@@@@=...........
                      .:%@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*-:.......
                      ....:+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%###=.
                      .....+@@@@@@##%*#@@@@@@@@@@@@@@@@@@@@#=...
                      .....-#@@**%%+=-+%@%%@@@@@@@@@@@@@%*-.....
                      .......-=*#=-===*#+==@@@@@@@@#+:..........
                      .......:-=-:::::--==:@@@@@@@@@@@%*=-......
                      .......-====-:..-==+#@@@@@@%#+======-:....
                      ........-===-:.:-+=-=+*######**=:.........
                      ........:===--=+==-:::.::.................
                      ............-====-::-:.::::-==:...........
                      .....:+###%#*=----::=::-=:::=###**+-......
                      ...:+--*%%*+=++===-===-====+#####**+:.....
                      ...:.:*%%%#+=+++------:-+*#%####-.-:......
                      ....-#%%%%%%%%#*##*****#%%####*:..........
                      ....-%%%%%%%%%%##*#########**=............
                      ....=%%%%%%%%%%######**+-.................
                      ..:-*%%%%%#*########+::..::-==:...........
                      ...+#################+:...................
                      ...:*##########****####*=--::.............
                      ....:*###**+=-:.....-==...................
                      ......::..................................
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;