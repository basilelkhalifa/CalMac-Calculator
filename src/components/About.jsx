import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <Container fluid className="about font-weight-light p-3">
      <Row className="my-5 center-text mx-auto">
        <Col sm={12} lg={6} className="my-auto">
          <Container fluid>
            <h1 className="font-weight-light pb-3">About CalMac</h1>
            <p>
              The CalMac calculator can be used to calculate the approximate
              number of calories and macronutrients a person needs to consume
              daily to maintain, gain, or lose weight. To understand how the
              calculator works, we must first explain what calories and
              macronutrients are. A calorie is a unit of energy used to estimate
              how much energy is in food. On the other hand, macronutrients, or
              macros for short, are nutrients that are needed by the human body
              to function. In fitness, the most focused on macros are proteins,
              carbohydrates (carbs), and fats. Moreover, macros are sources of
              energy that can be measured using calories. In each gram of
              protein and carbs there are approximately 4 calories. Similarly,
              in each gram of fats there are approximately 9 grams of fats.
              Using this information, one can obtain the number of calories
              needed to maintain, lose or gain weight. Conversely, one can
              obtain the number of needed macros using his/her calculated number
              of calories. CalMac uses a formula and average numbers to
              calculate one's caloric intake; it then uses the calculated number
              of calories to calculate the number of macros.
            </p>
          </Container>
        </Col>

        <Col sm={12} lg={6} className="my-auto">
          <img
            src="https://s4.gifyu.com/images/ezgif.com-gif-maker-1decfe20dd427f9d9.gif"
            alt="Calmac calculator"
            className="img-thumbnail img-fluid"
          />
        </Col>
      </Row>

      <Row className="my-5 mx-auto py-3">
        <Col sm={12} lg={6} className="order-2 order-lg-1 my-auto">
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="Salad"
            className="img-thumbnail img-fluid "
          />
        </Col>
        <Col sm={12} lg={6} className="order-1 order-lg-2">
          <Container fluid className=" center-text text-right">
            <h1 className="font-weight-light pb-3">What's next?</h1>
            <p>
              As mentioned earlier, the numbers used to calculate your caloric
              intake are averages. Therefore, most of the time, your results
              will not be precisely accurate and unfortunately, there are no
              calculators that can find your exact caloric need. However, that
              does not mean that your results are not going to be reliable. In
              fact, they can be very reliable for your goals. Assuming that your
              goal is to maintain your weight and your results were not
              accurate, you may notice that you are either gaining or losing
              weight. You can easily decrease or increase the number of calories
              you are consuming to counteract your weight gain or loss and find
              the exact amount of calories you need to maintain your weight. The
              same concepts can be applied to other goals. Keep in mind that the
              results can be way off the actual numbers. The calculator's job is
              to give you a good and reliable starting point. From there you
              should play with your results to find the actual numbers of
              calories and macros you need.
            </p>
          </Container>
        </Col>
      </Row>

      <Row className="my-5 center-text mx-auto pb-3">
        <Col sm={12} lg={6}>
          <Container fluid className="my-auto">
            <h1 className="font-weight-light pb-3">Tracking your calories</h1>
            <p>
              Keeping track of your calories can also be helpful in reaching
              your goal. With time, as you train, you will notice that your
              progress is slowing down. There a lot of factors and reasons for
              why that happens, however, one can be related to the number of
              calories you are consuming. Depending on your goal, you should
              decrease or increase the number of calories you are consuming. If
              your goal is to gain weight, then as you gain weight you must also
              increase the number of your calories with progress. Similarly, the
              same concept can be applied for losing weigh. As you lose weight
              you should decrease the number of calories you consume. Please
              keep in mind that you should not increase or decrease it
              significantly. Doing so can cause unwanted side effects. You
              should either increase or decrease it just enough for you to get
              back on track.
            </p>
          </Container>
        </Col>

        <Col sm={12} lg={6} className="my-auto">
          <img
            src="https://images.unsplash.com/photo-1513949145697-7a3b42cb9f21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="paper"
            className="img-thumbnail img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
}
