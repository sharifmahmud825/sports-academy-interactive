import React from 'react';

const About = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='my-2'>About Us</h1>
      <hr />
      <p className='mb-4'>
        Respect, effort, ambition, teamwork and humility are the five principal
        values that define the spirit of FC Barcelona
      </p>
      <img
        src='https://www.fcbarcelona.com/fcbarcelona/photo/2018/11/16/5577fecb-711a-4860-8c5e-ee54f40959af/VALORS.jpg'
        alt=''
        className='img-fluid text-center'
      />
      <h3 className='text-start mt-5'>Respect</h3>
      <p className='text-start'>
        Respect for others is one of the basic requirements of democratic life
        and the capacity to live in society. It affects the individual and has
        both a social and a collective dimension. Respect is a fundamental part
        of sport, for sport generates situations of tension that have to be
        resolved almost instantaneously. There is therefore a need, above rules
        and standards, for this value to be present in order to guarantee
        cordial and correct interrelations between people. In sport, respect is
        needed in similar situations to those where it is demanded in wider
        society, but the intensity of the moment implies that the presence or
        absence of respect can be very obvious and can affect the development of
        the situation or event.
      </p>
      <h3 className='text-start mt-5'>Effort</h3>
      <p className='text-start'>
        There are many social models that avoid effort and advocate instead
        luck, opportunism and immediate triumph. However, effort is a value that
        can take us to unthinkable heights and lead us to achieve targets and
        objectives that may at other times appear distant or inaccessible.
        Dedication, rigour, constancy, sacrifice and perseverance all bear
        fruit, while luck and the search for a quick win are often fleeting and
        momentary. Note that at school, teachers have for a long time being
        promoting a culture of effort as the vehicle for academic development
        and personal achievement, and this helps to construct new social models.
      </p>
      <h3 className='text-start mt-5'>Ambition</h3>
      <p className='text-start mb-5'>
        Ambition is the desire to achieve the maximum performance and do things
        not only well but also as well as is feasibly possible and to improve
        every day. This value is applicable both to individuals and to groups.
        It involves use of a web of values as varied as excellence, patience,
        discipline, order, motivation and responsibility. Indeed, ambition
        invokes and requires a broad system of values and, in turn, is related
        with a job being done well, effort and rigour. Regarding targets,
        ambition is probably the surest way of achieving them, for it is the
        impulse to grow.
      </p>
    </div>
  );
};

export default About;
