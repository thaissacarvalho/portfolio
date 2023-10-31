import TechStackCard from './TechStackCard/TechStackCard';
import SkillDescripton from './SkillDescripton/SkillDescripton';
import TechDescription from './TechStackCard/TechDescription/TechDescription';

export default function Skills() {
    return (
        <section id="skills" className="section__skills">
            <div className="skills__container">
                <SkillDescripton />
                <div className="skills__techStack">
                    <TechStackCard title="Front End">
                        <TechDescription category={['Frontend']} />
                    </TechStackCard>
                    <TechStackCard title="Back End">
                        <TechDescription category={['Backend']} />
                    </TechStackCard>
                    <TechStackCard title="Outros">
                        <TechDescription category={['Tools']} />
                    </TechStackCard>
                </div>
            </div>
        </section>
    )
}
