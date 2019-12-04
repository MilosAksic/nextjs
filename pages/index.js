import MyLayout from "../components/MyLayout";
import {
  Title,
  Wrapper,
  Grid,
  Button,
  TomatoButton,
  Input,
  BrandedButton,
  Typography
} from "../components/styledComponents";
import NameForm from "../components/NameForm";
const Index = () => (
  <MyLayout>
    <Wrapper>
      <Title>Hello Next.js</Title>

      <Button>Normal</Button>

      <Button primary>Primary</Button>
      <TomatoButton as="a" href="/">
        Tomato button
      </TomatoButton>
      <Input defaultValue="@probablyup" type="text" />
      <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
      <BrandedButton themeHoverColor="pink" themeColor="blue">
        Click Me!
      </BrandedButton>
      <Typography variant="subtitle1">Nesto</Typography>

      <Typography variant="h2" align="left">
        h2
      </Typography>
      <Typography variant="h3" align="center">
        h3
      </Typography>
      <Typography variant="h4" align="right">
        h4
      </Typography>
      <Typography variant="body2">Body2</Typography>
      <NameForm />
      <Grid container justify="center">
        <Grid
          item
          style={{ width: "500px", height: "200px", border: "1px solid black" }}
        >
          <Grid container direction="column">
            <Grid
              item
              xs={7}
              sm={3}
              style={{ height: "50px", border: "2px solid red" }}
            ></Grid>
            <Grid
              item
              style={{ width: "50px", height: "50px", border: "2px solid red" }}
            ></Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ width: "200px", height: "200px", border: "1px solid black" }}
        >
          12
        </Grid>
      </Grid>
    </Wrapper>
  </MyLayout>
);

export default Index;
