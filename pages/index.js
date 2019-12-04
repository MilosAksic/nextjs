import MyLayout from "../components/MyLayout";
import {
  Title,
  Wrapper,
  Grid,
  Button,
  TomatoButton,
  Input,
  BrandedButton
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
      <NameForm />
      <Grid container justify="center">
        <Grid
          item
          style={{ width: "500px", height: "200px", border: "1px solid black" }}
        >
          <Grid container direction="column">
            <Grid
              item
              xs={5}
              sm={2}
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
