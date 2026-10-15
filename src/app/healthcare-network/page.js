import Link from 'next/link';
import { ArrowUpRight, Building2, UsersRound, GitPullRequestArrow, HeartPulse, Network, ShieldCheck, CheckCircle2, Stethoscope, ScanLine } from 'lucide-react';
import { PageHero, SectionTitle, CTA, Eyebrow, Journey } from '@/components/Shared';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import TiltCard from '@/components/TiltCard';
import MagneticButton from '@/components/MagneticButton';

export const metadata = {
  title: 'SUSALI Healthcare Network',
  description: "SUSALI Healthcare Network — Connecting Patients and Doctors",
};

const groups = [
  { icon: HeartPulse, title: 'Patients', desc: 'Through their registered profiles, patients manage referrals, view appointments and access medical documents.' },
  { icon: Stethoscope, title: 'Doctors', desc: 'Doctors play the essential clinical role in evaluating health concerns and recommending treatment.' },
  { icon: Building2, title: 'Hospitals', desc: 'Participating hospitals provide the medical facilities, professional expertise and treatment services required.' },
  { icon: UsersRound, title: 'Coordination Teams', desc: 'Teams help facilitate administrative steps surrounding referrals, appointment arrangements and communication.' },
  { icon: ScanLine, title: 'Diagnostic Services', desc: 'Laboratory investigations and medical scans provide valuable information for diagnosis and treatment decisions.' },
];

export default function NetworkPage() {
  return <>
    <PageHero tag="A CONNECTED WORLD OF CARE" title="Bringing Patients, Doctors and" accent="Hospitals Together." description="Healthcare becomes more organized when the people and institutions involved can coordinate effectively. Explore how SUSALI connects important healthcare relationships." />

    <section className="section-space">
      <div className="container network-intro">
        <div>
          <ScrollReveal direction="left">
            <Eyebrow>THE POWER OF CONNECTION</Eyebrow>
            <h2>Great Healthcare Depends on <span className="blue-text">Great Connections.</span></h2>
          </ScrollReveal>
        </div>
        <div>
          <ScrollReveal direction="right">
            <p className="lead">Behind every successful healthcare experience are people working together.</p>
            <p>Patients need clear information about where to go and what comes next. Doctors need appropriate medical context to assess and guide treatment. Hospitals manage consultations, investigations, admissions and treatment services.</p>
            <p>Our healthcare network concept is built around the belief that better communication can make healthcare experiences more organized and supportive.</p>
          </ScrollReveal>
        </div>
      </div>
      <div className="container">
        <StaggerContainer className="network-groups" stagger={0.1} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', display: 'grid', gap: '18px' }}>
          {groups.map(({ icon: Icon, ...g }) => (
            <StaggerItem key={g.title}>
              <TiltCard className="network-group" style={{ height: '100%' }}>
                <span><Icon size={26} /></span>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    <section className="network-highlight section-space">
      <div className="container network-highlight-grid">
        <ScrollReveal direction="left" className="connect-art">
          <span className="connect-main">S</span>
          <span className="connect-ring r1" />
          <span className="connect-ring r2" />
          <span className="connect-bubble b1"><Building2 size={22} /></span>
          <span className="connect-bubble b2"><HeartPulse size={22} /></span>
          <span className="connect-bubble b3"><UsersRound size={22} /></span>
        </ScrollReveal>

        <div>
          <ScrollReveal direction="right">
            <Eyebrow light>CONNECTING STAGES OF CARE</Eyebrow>
            <h2>One Network.<br /><span>Different Healthcare Needs.</span></h2>
            <p>A patient's journey may involve different forms of medical attention, from general and specialist consultations to diagnostics, inpatient care and surgical treatment.</p>
            <div className="highlight-checks">
              <span><CheckCircle2 /> Clearer Communication</span>
              <span><CheckCircle2 /> Better Information Continuity</span>
              <span><CheckCircle2 /> Organized Healthcare Journeys</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <ScrollReveal>
      <section className="section-space">
        <div className="container">
          <SectionTitle eyebrow="GROWING THROUGH COLLABORATION" title="Building Meaningful" accent="Healthcare Relationships." desc="We believe the future of healthcare connectivity depends on meaningful collaboration. We welcome conversations with healthcare organizations." />
          <div className="partnership-panel">
            <div>
              <h3>Better Healthcare Connections Start with Collaboration.</h3>
              <p>Discover how SUSALI is working toward a more connected healthcare experience.</p>
            </div>
            <MagneticButton>
              <Link className="btn btn-primary" href="/contact">Connect With Our Team <ArrowUpRight size={18} /></Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </ScrollReveal>

    <CTA small />
  </>;
}