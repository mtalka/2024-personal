import Card from "./components/card";
import Section from "./components/section";
import workData from "./data.json";

export default function Home() {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
      <Section
        titleElement={
          <>
            <h2 className="text-xl z-10 font-bold">Work</h2>
            <div className="absolute z-0 rotate-6 translate-y-2 w-20 h-4 bg-gradient-to-r from-cyan-200 to-pink-200"></div>
          </>
        }
      >
        {workData.workExperience.map((experience, index) => (
          <li key={index}>
            <Card title={experience.company}>
              <div className="divide-y">
                {experience.positions.map((position, posIndex) => (
                  <div
                    key={posIndex}
                    className="pt-4 first:pt-0 pb-4 last:pb-0"
                  >
                    <h3>
                      {position.title} ({position.employmentType})
                    </h3>
                    <p>{position.duration}</p>
                    <p>{position.location}</p>
                    <ul className="pt-2 font-extralight list-inside">
                      {position.responsibilities.map(
                        (responsibility, respIndex) => (
                          <li key={respIndex}>
                            <span className="mr-2">-</span>
                            {responsibility}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          </li>
        ))}
      </Section>
      <Section
        titleElement={
          <>
            <h2 className="text-xl z-10 font-bold">Education</h2>
            <div className="absolute z-0 rotate-6 translate-y-2 w-20 h-4 bg-gradient-to-r from-pink-200 to-amber-200"></div>
          </>
        }
      >
        {workData.education.map((education, index) => (
          <li key={index}>
            <Card title={education.institution} subtitle={education.degree}>
              <div className="divide-y">
                <div className="pt-4 first:pt-0 pb-4 last:pb-0">
                  <p>{education.fieldOfStudy}</p>
                  <p>{education.yearsAttended}</p>
                </div>
              </div>
            </Card>
          </li>
        ))}
      </Section>
      <Section
        titleElement={
          <>
            <h2 className="text-xl z-10 font-bold">Publications</h2>
            <div className="absolute z-0 rotate-6 translate-y-2 w-20 h-4 bg-gradient-to-r from-amber-200 to-lime-200"></div>
          </>
        }
      >
        {workData.publications.map((publication, index) => (
          <li key={index}>
            <Card title={publication.title} subtitle={publication.institution}>
              <div className="divide-y">
                <div className="pt-4 first:pt-0 pb-4 last:pb-0">
                  <p>{publication.date}</p>
                </div>
              </div>
            </Card>
          </li>
        ))}
      </Section>
      <Section
        titleElement={
          <>
            <h2 className="text-xl z-10 font-bold">Certificates</h2>
            <div className="absolute z-0 rotate-6 translate-y-2 w-20 h-4 bg-gradient-to-r from-lime-200 to-sky-200"></div>
          </>
        }
      >
        {workData.certificates.map((certificate, index) => (
          <li key={index}>
            <Card title={certificate.title} subtitle={certificate.institution}>
              <div className="divide-y">
                <div className="pt-4 first:pt-0 pb-4 last:pb-0">
                  <p>{certificate.date}</p>
                </div>
              </div>
            </Card>
          </li>
        ))}
      </Section>
    </div>
  );
}
