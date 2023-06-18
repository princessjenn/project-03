import React from "react";

export default function Barbers() {
  return (
    <div>
      <div className="flex flex-col w-full lg:flex-row">
        <div className="flex-grow">
          <div className="card w-96 glass">
            <figure>
              <img src="/images/anthony-banks.jpg" alt="Anthony Banks" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl text-error font-bold">Anthony Banks</h2>
              <p className="text-sm text-primary font-bold">
                Anthony Banks, the co-owner of The Fade Brigade Barber Shop, is a
                true master of his craft. Anthony Banks, the co-owner of The Fade
                Brigade Barber Shop, is a true master of his craft. With over 15
                years of experience in the industry, Anthony's passion for
                barbering runs deep. Known for his meticulous attention to detail
                and precision, he has earned a loyal following of clients who
                trust him with their hair. Anthony's friendly and approachable
                demeanor creates a welcoming atmosphere in the shop, where clients
                can sit back, relax, and enjoy a top-notch grooming experience.
                Whether you're looking for a classic clean cut or a modern style,
                Anthony's expert hands will leave you feeling confident and
                looking sharp.
              </p>
            </div>
          </div>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="flex-grow">
          <div className="card w-96 glass">
            <figure>
              <img src="/images/david-smith.jpg" alt="David Smith" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl text-error font-bold">David Smith</h2>
              <p className="text-sm text-primary font-bold">
                Meet David Smith, the other half of The Fade Brigade Barber Shop's
                dynamic duo. As a co-owner and skilled barber, David brings a
                unique blend of creativity and expertise to the barbershop. With a
                keen eye for trends and a passion for experimenting with different
                styles, David loves helping clients find their signature look.
                From edgy fades to suave beard trims, his artistic touch and
                attention to individuality make every visit to his chair an
                opportunity for self-expression. David's infectious energy and
                warm personality create an environment where clients can feel
                comfortable and inspired to try something new. Step into his chair
                and let David work his magic, leaving you with a hairstyle that
                reflects your personality and boosts your confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <div className="flex justify-center">
          <button className="btn btn-primary">Book Now!</button>
        </div>
      </div>
    </div>
  );
}
