
import Card from "./components/card";
import workData from "./data.json";

export default function Home() {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
      <div className="flex flex-col gap-4">
        <header className="relative w-full flex justify-center">
          <h2 className="text-2xl z-10 font-bold ">Work</h2>
          <div className="absolute z-0 rotate-6 translate-y-2 w-20 h-4 bg-cyan-200"></div>
        </header>
        <ul className="flex flex-col gap-2">
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
                          <li key={respIndex}><span className="mr-2">-</span>{responsibility}</li>
                        )
                      )}
                    </ul>
                    </div>
                  ))}
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <header className="relative w-full flex justify-center">
          <h2 className="text-2xl z-10 font-bold">Education</h2>
          <div className="absolute z-0 rotate-6 translate-y-2 w-20 h-4 bg-pink-200 "></div>
        </header>
        <ul className="flex flex-col gap-2">
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
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <header className="relative w-full flex justify-center">
          <h2 className="text-2xl z-10 font-bold">Publications</h2>
          <div className="absolute z-0 rotate-6 translate-y-2 w-20 h-4 bg-amber-200 "></div>
        </header>
        <ul className="flex flex-col gap-2">
          {workData.publications.map((publication, index) => (
            <li key={index}>
              <Card
                title={publication.title}
                subtitle={publication.institution}
              >
                <div className="divide-y">
                  <div className="pt-4 first:pt-0 pb-4 last:pb-0">
                    <p>{publication.date}</p>
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ul>
        <header className="relative w-full flex justify-center">
          <h2 className="text-2xl z-10 font-bold">Certificates</h2>
          <div className="absolute z-0 rotate-6 translate-y-2 w-20 h-4 bg-purple-200 "></div>
        </header>
        <ul className="flex flex-col gap-2">
          {workData.certificates.map((certificate, index) => (
            <li key={index}>
              <Card
                title={certificate.title}
                subtitle={certificate.institution}
              >
                <div className="divide-y">
                  <div className="pt-4 first:pt-0 pb-4 last:pb-0">
                    <p>{certificate.date}</p>
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
