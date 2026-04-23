import { useState, useEffect } from 'react';
import {
  Phone, ArrowLeft, ArrowRight, AlertTriangle, CheckCircle2, Info,
  Clock, ShieldAlert, FileText, HardHat, Users, Activity, Zap,
  History, X, Check, ChevronRight
} from 'lucide-react';

// ---- Design tokens -----------------------------------------------------
const theme = {
  bg: '#F3EEE1',
  surface: '#FFFFFF',
  surfaceSoft: '#FAF6EA',
  ink: '#1A1F1A',
  inkMuted: '#6A6D66',
  line: '#E4DDC8',
  primary: '#1F3A2E',
  primaryInk: '#F3EEE1',
  accent: '#B8691C',
  danger: '#8B1F1F',
  success: '#2D5016',
  amberSoft: '#F5E8D6',
  dangerSoft: '#F3DEDE',
  successSoft: '#DDE6D2',
};

// ---- Mock handler data -------------------------------------------------
const HANDLER = {
  name: 'Sarah Whitlock',
  role: 'Senior Claims Handler',
  initials: 'SW',
  phone: '01455 244630',
  email: 'Claims@crs-ins.co.uk',
  responseSLA: 'typically within 30 minutes, Mon–Fri',
};

// ---- Outcome definitions -----------------------------------------------
const OUTCOMES = {
  'report-immediate': {
    verdict: 'Reportable to HSE — notify immediately',
    severity: 'danger',
    icon: AlertTriangle,
    summary: 'This is a fatal or major incident. You must notify the HSE by the quickest practicable means, and submit the written report within 10 days.',
    actions: [
      { label: 'Notify HSE immediately', detail: 'By telephone: 0345 300 9923 (Incident Contact Centre, Mon–Fri 08:30–17:00) or online at hse.gov.uk/riddor' },
      { label: 'Preserve the scene', detail: 'So far as is reasonably practicable, do not disturb the scene until the HSE advise you otherwise. Take photographs before anything moves.' },
      { label: 'Complete form F2508', detail: 'Submit to HSE within 10 days of the incident.' },
      { label: 'Notify your CRS claims handler', detail: `Sarah will contact your insurer, brief the loss adjuster, and guide you through the investigation.` },
    ],
    deadline: 'Immediate notification + written report within 10 days',
  },
  'report-10days': {
    verdict: 'Reportable to HSE — within 10 days',
    severity: 'danger',
    icon: ShieldAlert,
    summary: 'This meets the RIDDOR threshold. A written report must be submitted to the HSE within 10 days of the incident.',
    actions: [
      { label: 'Submit form F2508 to the HSE', detail: 'Online at hse.gov.uk/riddor. You will need: name and contact details of the injured person, nature of injury, date/time/location, brief description of what happened.' },
      { label: 'Record in your accident book', detail: 'Even when reporting to the HSE, your internal accident record is still required.' },
      { label: 'Preserve evidence', detail: 'Keep the scene, tools, plant, and PPE involved where possible. Take photographs.' },
      { label: 'Notify your CRS claims handler', detail: 'Sarah will open the claim with your insurer and coordinate any investigation.' },
    ],
    deadline: 'Within 10 days of the incident',
  },
  'report-15days': {
    verdict: 'Reportable to HSE — over-seven-day injury',
    severity: 'danger',
    icon: Clock,
    summary: 'The injured worker has been unable to carry out their normal duties for more than seven consecutive days (not counting the day of the accident). This must be reported to the HSE within 15 days.',
    actions: [
      { label: 'Submit form F2508 to the HSE', detail: 'Online at hse.gov.uk/riddor. The 15-day clock runs from the date of the accident, not from the seventh day.' },
      { label: 'Record in your accident book', detail: 'Keep the internal record alongside the HSE notification.' },
      { label: 'Keep medical documentation', detail: 'Doctor\'s notes, fit notes, and any treatment records will support both the RIDDOR report and the insurance claim.' },
      { label: 'Notify your CRS claims handler', detail: 'Sarah will start the Employers\' Liability notification with your insurer.' },
    ],
    deadline: 'Within 15 days of the incident',
  },
  'report-disease': {
    verdict: 'Reportable to HSE — occupational disease',
    severity: 'danger',
    icon: Activity,
    summary: 'This is a reportable occupational disease. You must submit a written report to the HSE within 10 days of receiving the written diagnosis.',
    actions: [
      { label: 'Confirm the diagnosis in writing', detail: 'A RIDDOR disease report requires a written diagnosis from a doctor. Keep a copy on file.' },
      { label: 'Submit form F2508A to the HSE', detail: 'The specific form for occupational diseases. Available at hse.gov.uk/riddor' },
      { label: 'Review exposure records', detail: 'Health surveillance records, COSHH assessments, and PPE provision will be relevant to both HSE and insurer enquiries.' },
      { label: 'Notify your CRS claims handler', detail: 'Occupational disease claims can be long-tail. Early insurer notification protects cover.' },
    ],
    deadline: 'Within 10 days of the written diagnosis',
  },
  'record-only': {
    verdict: 'Not RIDDOR-reportable — but you must record it',
    severity: 'amber',
    icon: FileText,
    summary: 'This does not meet the RIDDOR threshold. However, under the Social Security (Claims and Payments) Regulations you must record the incident in your accident book.',
    actions: [
      { label: 'Record in your accident book (BI 510)', detail: 'Date, time, location, injured person, description, first aid given, signature.' },
      { label: 'Investigate the cause', detail: 'Even minor incidents can indicate a pattern. Consider whether a method statement, risk assessment, or toolbox talk needs updating.' },
      { label: 'Consider notifying your CRS handler', detail: 'If the injured person might later claim, or if the incident suggests a wider exposure, notify Sarah now. Early notification protects your position.' },
    ],
    deadline: 'Record at the time; review monthly',
  },
  'not-reportable': {
    verdict: 'Not RIDDOR-reportable on the information provided',
    severity: 'success',
    icon: CheckCircle2,
    summary: 'Based on what you have told me, this incident does not appear to meet the RIDDOR reporting threshold.',
    actions: [
      { label: 'Record it anyway', detail: 'Good practice is to log every incident, however minor. Patterns only emerge from consistent recording.' },
      { label: 'Review your controls', detail: 'Near-misses are your best leading indicator. A 30-second review now can prevent a reportable incident next month.' },
      { label: 'Call your CRS handler if anything is uncertain', detail: 'Sarah would rather you call and be told you were right than miss a reportable incident.' },
    ],
    deadline: 'No HSE deadline applies',
  },
  'call-handler': {
    verdict: 'Let\'s get your CRS handler on the phone',
    severity: 'amber',
    icon: Phone,
    summary: 'This sits in a grey area. The right answer depends on specifics I cannot see from here — scene preservation, witness status, third-party involvement, scheme-specific obligations. Sarah will walk through it with you in a few minutes.',
    actions: [
      { label: `Call Sarah on ${HANDLER.phone}`, detail: `Mon–Fri 08:30–17:30. ${HANDLER.responseSLA}.` },
      { label: 'For fleet / road incidents out of hours', detail: 'The 24/7 motor line is available on the same number.' },
      { label: 'Preserve evidence meanwhile', detail: 'Photographs, witness details, any CCTV sources — capture now while memory and access are fresh.' },
    ],
    deadline: 'Call as soon as you can',
  },
};

// ---- Question screens --------------------------------------------------
function Button({ children, onClick, variant = 'primary', icon: Icon, fullWidth = true, small = false }) {
  const styles = {
    primary: { background: theme.primary, color: theme.primaryInk, border: `1px solid ${theme.primary}` },
    secondary: { background: 'transparent', color: theme.ink, border: `1px solid ${theme.line}` },
    danger: { background: theme.danger, color: '#fff', border: `1px solid ${theme.danger}` },
    ghost: { background: 'transparent', color: theme.inkMuted, border: 'none' },
  };
  return (
    <button
      onClick={onClick}
      style={{
        ...styles[variant],
        width: fullWidth ? '100%' : 'auto',
        padding: small ? '10px 14px' : '16px 18px',
        borderRadius: 2,
        fontFamily: 'IBM Plex Sans, sans-serif',
        fontSize: small ? 14 : 16,
        fontWeight: 500,
        letterSpacing: '-0.01em',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        transition: 'transform 0.08s ease, opacity 0.2s ease',
      }}
      onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.99)'}
      onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <span style={{ display: 'flex', alignItems: 'center', gap: 10, textAlign: 'left' }}>
        {Icon && <Icon size={18} strokeWidth={1.5} />}
        {children}
      </span>
      {variant === 'primary' && <ArrowRight size={16} strokeWidth={1.5} />}
    </button>
  );
}

function Card({ children, soft = false }) {
  return (
    <div style={{
      background: soft ? theme.surfaceSoft : theme.surface,
      border: `1px solid ${theme.line}`,
      borderRadius: 3,
      padding: 20,
      marginBottom: 14,
    }}>
      {children}
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{
      fontFamily: 'IBM Plex Sans, sans-serif',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: theme.inkMuted,
      marginBottom: 8,
    }}>
      {children}
    </div>
  );
}

function Heading({ children, size = 'lg' }) {
  const sizes = {
    xl: { fontSize: 34, lineHeight: 1.05 },
    lg: { fontSize: 26, lineHeight: 1.1 },
    md: { fontSize: 20, lineHeight: 1.2 },
  };
  return (
    <h1 style={{
      fontFamily: 'Fraunces, serif',
      fontWeight: 400,
      color: theme.ink,
      letterSpacing: '-0.02em',
      margin: 0,
      ...sizes[size],
    }}>
      {children}
    </h1>
  );
}

function Body({ children, muted = false, size = 'md' }) {
  return (
    <p style={{
      fontFamily: 'IBM Plex Sans, sans-serif',
      fontSize: size === 'sm' ? 14 : 15.5,
      lineHeight: 1.55,
      color: muted ? theme.inkMuted : theme.ink,
      margin: '0 0 12px 0',
      letterSpacing: '-0.005em',
    }}>
      {children}
    </p>
  );
}

// ---- Main component ----------------------------------------------------
export default function RiddorHelper() {
  const [step, setStep] = useState('welcome');
  const [stepStack, setStepStack] = useState([]);
  const [answers, setAnswers] = useState({});
  const [outcomeKey, setOutcomeKey] = useState(null);
  const [dangerousChecks, setDangerousChecks] = useState([]);
  const [diseaseChecks, setDiseaseChecks] = useState([]);
  const [log, setLog] = useState([]);
  const [showLog, setShowLog] = useState(false);
  const [showHandler, setShowHandler] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Persistent log
  useEffect(() => {
    (async () => {
      try {
        const r = await window.storage.get('riddor-log');
        if (r?.value) setLog(JSON.parse(r.value));
      } catch { /* empty */ }
    })();
  }, []);

  const saveLogEntry = async (entry) => {
    const next = [entry, ...log].slice(0, 25);
    setLog(next);
    try {
      await window.storage.set('riddor-log', JSON.stringify(next));
    } catch (e) { console.error(e); }
  };

  const goTo = (next, key, value) => {
    setStepStack((s) => [...s, step]);
    if (key) setAnswers((a) => ({ ...a, [key]: value }));
    setStep(next);
    setSubmitted(false);
  };

  const goBack = () => {
    const prev = stepStack[stepStack.length - 1];
    if (prev) {
      setStepStack((s) => s.slice(0, -1));
      setStep(prev);
    }
  };

  const setOutcome = (key) => {
    setOutcomeKey(key);
    setStepStack((s) => [...s, step]);
    setStep('outcome');
  };

  const reset = () => {
    setStep('welcome');
    setStepStack([]);
    setAnswers({});
    setOutcomeKey(null);
    setDangerousChecks([]);
    setDiseaseChecks([]);
    setSubmitted(false);
  };

  const submitToHandler = async () => {
    const outcome = OUTCOMES[outcomeKey];
    const entry = {
      id: `r-${Date.now()}`,
      timestamp: new Date().toISOString(),
      outcome: outcome.verdict,
      severity: outcome.severity,
      answers,
      dangerousChecks,
      diseaseChecks,
      submittedToHandler: true,
    };
    await saveLogEntry(entry);
    setSubmitted(true);
  };

  // ----- Screen rendering ------------------------------------------------
  const renderWelcome = () => (
    <div>
      <div style={{ marginBottom: 28 }}>
        <SectionLabel>Workplace incident · RIDDOR helper</SectionLabel>
        <Heading size="xl">Let's work out what needs to happen next.</Heading>
      </div>
      <Body muted>
        This tool walks you through whether an incident on your site needs reporting to the HSE under RIDDOR. It takes about sixty seconds, and whatever the answer, Sarah on your CRS team is one tap away.
      </Body>
      <Body muted>
        It's guidance, not legal advice. For anything you're unsure about, call your handler — we'd rather you checked.
      </Body>
      <div style={{ marginTop: 20 }}>
        <Button onClick={() => goTo('incident-type')} icon={HardHat}>Start — tell me what happened</Button>
      </div>
    </div>
  );

  const renderIncidentType = () => (
    <div>
      <Heading>What kind of incident was it?</Heading>
      <div style={{ height: 24 }} />
      <Button variant="secondary" icon={Users} onClick={() => goTo('injury-who', 'incidentType', 'injury')}>
        Someone has been injured
      </Button>
      <div style={{ height: 10 }} />
      <Button variant="secondary" icon={Zap} onClick={() => goTo('dangerous-check', 'incidentType', 'dangerous')}>
        A dangerous occurrence (near miss)
      </Button>
      <div style={{ height: 10 }} />
      <Button variant="secondary" icon={Activity} onClick={() => goTo('disease-check', 'incidentType', 'disease')}>
        A work-related illness has been diagnosed
      </Button>
      <div style={{ height: 10 }} />
      <Button variant="secondary" icon={Info} onClick={() => setOutcome('call-handler')}>
        I'm not sure — let me speak to Sarah
      </Button>
    </div>
  );

  const renderInjuryWho = () => (
    <div>
      <Heading>Who was injured?</Heading>
      <Body muted>This changes the reporting rules.</Body>
      <div style={{ height: 16 }} />
      <Button variant="secondary" onClick={() => goTo('injury-worker-severity', 'who', 'worker')}>
        A worker — employee, subcontractor, or self-employed person working under our control
      </Button>
      <div style={{ height: 10 }} />
      <Button variant="secondary" onClick={() => goTo('injury-public-severity', 'who', 'public')}>
        A member of the public, or someone not at work
      </Button>
    </div>
  );

  const renderInjuryWorkerSeverity = () => (
    <div>
      <Heading>How serious is the injury?</Heading>
      <Body muted>Pick the most serious that applies.</Body>
      <div style={{ height: 16 }} />
      <Button variant="danger" onClick={() => setOutcome('report-immediate')}>
        Fatal
      </Button>
      <div style={{ height: 10 }} />
      <Button variant="secondary" onClick={() => setOutcome('report-10days')}>
        A "specified injury" — fracture (excluding fingers, thumbs, toes), amputation, permanent loss of sight, crush injury to head or torso, serious burn (&gt;10% of body or damaging eyes / respiratory system / vital organs), scalping, loss of consciousness from head injury or asphyxia, or work in enclosed space leading to hypothermia, heat-induced illness, resuscitation, or 24+ hours in hospital
      </Button>
      <div style={{ height: 10 }} />
      <Button variant="secondary" onClick={() => setOutcome('report-15days')}>
        Not in the list above, but they've been unable to do their normal work for more than seven consecutive days (not counting the day of the accident)
      </Button>
      <div style={{ height: 10 }} />
      <Button variant="secondary" onClick={() => setOutcome('record-only')}>
        They were off / on light duties for between three and seven days
      </Button>
      <div style={{ height: 10 }} />
      <Button variant="secondary" onClick={() => setOutcome('not-reportable')}>
        Minor — first aid only, back to normal duties same day or next day
      </Button>
    </div>
  );

  const renderInjuryPublicSeverity = () => (
    <div>
      <Heading>Was the injured person taken to hospital?</Heading>
      <Body muted>For members of the public, the test is whether they went from the scene to hospital for treatment of an injury arising from the work activity.</Body>
      <div style={{ height: 16 }} />
      <Button variant="danger" onClick={() => setOutcome('report-immediate')}>
        Fatal
      </Button>
      <div style={{ height: 10 }} />
      <Button variant="secondary" onClick={() => setOutcome('report-10days')}>
        Yes — taken directly to hospital for treatment
      </Button>
      <div style={{ height: 10 }} />
      <Button variant="secondary" onClick={() => setOutcome('not-reportable')}>
        No hospital treatment needed
      </Button>
    </div>
  );

  const DANGEROUS_ITEMS = [
    'Collapse or overturning of load-bearing parts of cranes, hoists, forklifts, or lifting equipment',
    'Failure of a pressure system releasing its contents',
    'Plant or equipment coming into contact with overhead power lines',
    'Electrical short-circuit or overload causing fire or explosion',
    'Unintentional explosion, ignition, or fire of substances (&ge;10 minutes out of control)',
    'Accidental release of a biological agent likely to cause severe illness',
    'Collapse or partial collapse of scaffolding more than 5m high',
    'Collapse of a building or structure (or part) under construction, alteration, or demolition involving more than 5 tonnes of material',
    'Unintended collision of a train with another train or vehicle',
    'Dropped load from a crane or lifting device (where no injury occurred)',
    'Explosion or fire causing work stoppage or suspension >24 hours',
  ];

  const renderDangerousCheck = () => (
    <div>
      <Heading>Did any of these happen?</Heading>
      <Body muted>Tick all that apply. These are the RIDDOR-listed dangerous occurrences most relevant to construction and demolition.</Body>
      <div style={{ height: 12 }} />
      {DANGEROUS_ITEMS.map((item, i) => {
        const checked = dangerousChecks.includes(i);
        return (
          <label
            key={i}
            onClick={() => setDangerousChecks((arr) => arr.includes(i) ? arr.filter((x) => x !== i) : [...arr, i])}
            style={{
              display: 'flex',
              gap: 12,
              padding: '14px 16px',
              marginBottom: 8,
              background: checked ? theme.surfaceSoft : theme.surface,
              border: `1px solid ${checked ? theme.primary : theme.line}`,
              borderRadius: 3,
              cursor: 'pointer',
              alignItems: 'flex-start',
            }}
          >
            <div style={{
              width: 20, height: 20, flexShrink: 0, marginTop: 1,
              border: `1.5px solid ${checked ? theme.primary : theme.line}`,
              background: checked ? theme.primary : 'transparent',
              borderRadius: 2,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {checked && <Check size={13} color={theme.primaryInk} strokeWidth={3} />}
            </div>
            <span style={{
              fontFamily: 'IBM Plex Sans, sans-serif',
              fontSize: 14.5,
              lineHeight: 1.5,
              color: theme.ink,
            }} dangerouslySetInnerHTML={{ __html: item }} />
          </label>
        );
      })}
      <div style={{ height: 14 }} />
      <Button onClick={() => setOutcome(dangerousChecks.length > 0 ? 'report-10days' : 'not-reportable')}>
        Continue
      </Button>
    </div>
  );

  const DISEASE_ITEMS = [
    'Carpal tunnel syndrome (where work involves regular use of hand-held vibrating tools)',
    'Severe cramp of the hand or forearm (repetitive movements)',
    'Occupational dermatitis',
    'Hand-arm vibration syndrome (HAVS)',
    'Occupational asthma',
    'Tendonitis or tenosynovitis of the hand or forearm (repetitive movements)',
    'Any occupational cancer',
    'Any disease attributed to an occupational exposure to a biological agent',
  ];

  const renderDiseaseCheck = () => (
    <div>
      <Heading>Has a doctor diagnosed any of these?</Heading>
      <Body muted>A RIDDOR disease report requires a written diagnosis from a doctor, linking the condition to the worker's occupational exposure.</Body>
      <div style={{ height: 12 }} />
      {DISEASE_ITEMS.map((item, i) => {
        const checked = diseaseChecks.includes(i);
        return (
          <label
            key={i}
            onClick={() => setDiseaseChecks((arr) => arr.includes(i) ? arr.filter((x) => x !== i) : [...arr, i])}
            style={{
              display: 'flex',
              gap: 12,
              padding: '14px 16px',
              marginBottom: 8,
              background: checked ? theme.surfaceSoft : theme.surface,
              border: `1px solid ${checked ? theme.primary : theme.line}`,
              borderRadius: 3,
              cursor: 'pointer',
              alignItems: 'flex-start',
            }}
          >
            <div style={{
              width: 20, height: 20, flexShrink: 0, marginTop: 1,
              border: `1.5px solid ${checked ? theme.primary : theme.line}`,
              background: checked ? theme.primary : 'transparent',
              borderRadius: 2,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {checked && <Check size={13} color={theme.primaryInk} strokeWidth={3} />}
            </div>
            <span style={{
              fontFamily: 'IBM Plex Sans, sans-serif',
              fontSize: 14.5,
              lineHeight: 1.5,
              color: theme.ink,
            }}>{item}</span>
          </label>
        );
      })}
      <div style={{ height: 14 }} />
      <Button onClick={() => setOutcome(diseaseChecks.length > 0 ? 'report-disease' : 'not-reportable')}>
        Continue
      </Button>
    </div>
  );

  const renderOutcome = () => {
    const outcome = OUTCOMES[outcomeKey];
    const Icon = outcome.icon;
    const sev = outcome.severity;
    const accentColor = sev === 'danger' ? theme.danger : sev === 'amber' ? theme.accent : theme.success;
    const accentSoft = sev === 'danger' ? theme.dangerSoft : sev === 'amber' ? theme.amberSoft : theme.successSoft;

    return (
      <div>
        <div style={{
          background: accentSoft,
          border: `1px solid ${accentColor}`,
          borderRadius: 3,
          padding: 20,
          marginBottom: 18,
        }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 10 }}>
            <div style={{
              width: 38, height: 38, background: accentColor, borderRadius: 2,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <Icon size={20} color="#fff" strokeWidth={1.8} />
            </div>
            <div>
              <SectionLabel>Outcome</SectionLabel>
              <Heading size="md">{outcome.verdict}</Heading>
            </div>
          </div>
          <Body>{outcome.summary}</Body>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.6)',
            padding: '8px 12px', borderRadius: 2,
            fontFamily: 'IBM Plex Sans, sans-serif',
            fontSize: 13, color: theme.ink, fontWeight: 500,
          }}>
            <Clock size={14} strokeWidth={1.5} />
            <span>{outcome.deadline}</span>
          </div>
        </div>

        <SectionLabel>What to do now</SectionLabel>
        <div style={{ marginTop: 10 }}>
          {outcome.actions.map((a, i) => (
            <div key={i} style={{
              padding: '14px 16px',
              marginBottom: 8,
              background: theme.surface,
              border: `1px solid ${theme.line}`,
              borderRadius: 3,
            }}>
              <div style={{
                display: 'flex', gap: 12, alignItems: 'flex-start',
              }}>
                <div style={{
                  width: 22, height: 22, flexShrink: 0, marginTop: 1,
                  borderRadius: '50%',
                  background: theme.primary, color: theme.primaryInk,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'IBM Plex Sans', fontSize: 12, fontWeight: 500,
                }}>{i + 1}</div>
                <div>
                  <div style={{
                    fontFamily: 'IBM Plex Sans, sans-serif',
                    fontSize: 15, fontWeight: 500, color: theme.ink, marginBottom: 4,
                    letterSpacing: '-0.005em',
                  }}>{a.label}</div>
                  <div style={{
                    fontFamily: 'IBM Plex Sans, sans-serif',
                    fontSize: 14, lineHeight: 1.5, color: theme.inkMuted,
                  }}>{a.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ height: 20 }} />
        {!submitted ? (
          <Button onClick={submitToHandler} icon={FileText}>
            Send this summary to Sarah at CRS
          </Button>
        ) : (
          <div style={{
            background: theme.successSoft,
            border: `1px solid ${theme.success}`,
            padding: 18, borderRadius: 3,
            display: 'flex', gap: 12, alignItems: 'flex-start',
          }}>
            <CheckCircle2 size={20} color={theme.success} strokeWidth={1.8} style={{ marginTop: 2, flexShrink: 0 }} />
            <div>
              <div style={{
                fontFamily: 'Fraunces, serif', fontSize: 18, color: theme.ink, marginBottom: 4,
                letterSpacing: '-0.01em',
              }}>Sent to Sarah.</div>
              <Body muted size="sm">
                Your CRS claims handler has the full summary and will call you {HANDLER.responseSLA.replace('typically ', '')}. Reference saved to your claims file.
              </Body>
            </div>
          </div>
        )}
        <div style={{ height: 10 }} />
        <Button variant="secondary" onClick={reset} fullWidth>
          Start another incident report
        </Button>
      </div>
    );
  };

  // ---- Handler panel ----------------------------------------------------
  const renderHandlerPanel = () => (
    <div
      onClick={() => setShowHandler(false)}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(26,31,26,0.4)',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
        zIndex: 50,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: theme.bg,
          width: '100%', maxWidth: 520,
          borderRadius: '3px 3px 0 0',
          padding: 24,
          borderTop: `3px solid ${theme.primary}`,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
          <div>
            <SectionLabel>Your CRS team</SectionLabel>
            <div style={{ height: 4 }} />
            <Heading size="md">We're one tap away.</Heading>
          </div>
          <button onClick={() => setShowHandler(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: theme.inkMuted }}>
            <X size={20} />
          </button>
        </div>

        <div style={{
          background: theme.surface, border: `1px solid ${theme.line}`, borderRadius: 3,
          padding: 18, marginBottom: 10,
        }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 14 }}>
            <div style={{
              width: 52, height: 52, borderRadius: '50%',
              background: theme.primary, color: theme.primaryInk,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Fraunces, serif', fontSize: 19, letterSpacing: '0.02em',
            }}>{HANDLER.initials}</div>
            <div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 19, color: theme.ink, letterSpacing: '-0.01em' }}>{HANDLER.name}</div>
              <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13.5, color: theme.inkMuted }}>{HANDLER.role} · CRS Insurance</div>
            </div>
          </div>
          <a href={`tel:${HANDLER.phone.replace(/\s/g, '')}`} style={{ textDecoration: 'none' }}>
            <Button onClick={() => {}} icon={Phone}>
              Call {HANDLER.phone}
            </Button>
          </a>
          <div style={{ height: 8 }} />
          <Body muted size="sm">
            Direct line Mon–Fri 08:30–17:30. Out-of-hours motor / fleet incidents on the same number, option 4.
          </Body>
        </div>

        <Body muted size="sm">
          Every conversation is logged to your file — part of Fair Value evidence and available for your records at any time.
        </Body>
      </div>
    </div>
  );

  // ---- Log panel --------------------------------------------------------
  const renderLogPanel = () => (
    <div
      onClick={() => setShowLog(false)}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(26,31,26,0.4)',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
        zIndex: 50,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: theme.bg,
          width: '100%', maxWidth: 520, maxHeight: '85vh', overflowY: 'auto',
          borderRadius: '3px 3px 0 0',
          padding: 24,
          borderTop: `3px solid ${theme.primary}`,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
          <div>
            <SectionLabel>Audit log · Fair Value evidence</SectionLabel>
            <div style={{ height: 4 }} />
            <Heading size="md">Your incident history</Heading>
          </div>
          <button onClick={() => setShowLog(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: theme.inkMuted }}>
            <X size={20} />
          </button>
        </div>

        {log.length === 0 ? (
          <Body muted size="sm">No incidents recorded yet. Every completed flow is saved here with timestamp and outcome — usable as Consumer Duty / Fair Value evidence.</Body>
        ) : (
          log.map((e) => (
            <div key={e.id} style={{
              background: theme.surface, border: `1px solid ${theme.line}`, borderRadius: 3,
              padding: 14, marginBottom: 8,
            }}>
              <div style={{
                fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12.5, color: theme.inkMuted, marginBottom: 4,
              }}>
                {new Date(e.timestamp).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })}
              </div>
              <div style={{
                fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14.5, color: theme.ink, fontWeight: 500,
                marginBottom: 4, letterSpacing: '-0.005em',
              }}>{e.outcome}</div>
              {e.submittedToHandler && (
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, color: theme.success,
                }}>
                  <Check size={12} strokeWidth={2} />
                  Sent to CRS handler
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );

  // ---- Root layout ------------------------------------------------------
  const renderStep = () => {
    switch (step) {
      case 'welcome': return renderWelcome();
      case 'incident-type': return renderIncidentType();
      case 'injury-who': return renderInjuryWho();
      case 'injury-worker-severity': return renderInjuryWorkerSeverity();
      case 'injury-public-severity': return renderInjuryPublicSeverity();
      case 'dangerous-check': return renderDangerousCheck();
      case 'disease-check': return renderDiseaseCheck();
      case 'outcome': return renderOutcome();
      default: return renderWelcome();
    }
  };

  const showBack = stepStack.length > 0 && step !== 'outcome';

  return (
    <div style={{
      minHeight: '100vh',
      background: theme.bg,
      fontFamily: 'IBM Plex Sans, sans-serif',
      color: theme.ink,
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=IBM+Plex+Sans:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        button:hover { opacity: 0.92; }
      `}</style>

      {/* Top bar */}
      <div style={{
        borderBottom: `1px solid ${theme.line}`,
        background: theme.bg,
        position: 'sticky', top: 0, zIndex: 10,
      }}>
        <div style={{
          maxWidth: 560, margin: '0 auto',
          padding: '14px 20px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {showBack ? (
              <button onClick={goBack} style={{
                background: 'none', border: 'none', padding: 4, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 6, color: theme.ink,
                fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14,
              }}>
                <ArrowLeft size={16} strokeWidth={1.5} /> Back
              </button>
            ) : (
              <div style={{
                fontFamily: 'Fraunces, serif', fontSize: 17, color: theme.ink,
                letterSpacing: '-0.01em',
              }}>
                CRS <span style={{ color: theme.inkMuted, fontSize: 13, fontFamily: 'IBM Plex Sans', marginLeft: 4, letterSpacing: 0 }}>Insurance</span>
              </div>
            )}
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={() => setShowLog(true)} style={{
              background: 'none', border: 'none', padding: 8, cursor: 'pointer',
              color: theme.inkMuted, display: 'flex', alignItems: 'center',
            }}>
              <History size={18} strokeWidth={1.5} />
            </button>
            <button onClick={() => setShowHandler(true)} style={{
              background: theme.primary, color: theme.primaryInk,
              border: 'none', padding: '8px 12px', borderRadius: 2, cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 6,
              fontFamily: 'IBM Plex Sans', fontSize: 13, fontWeight: 500,
            }}>
              <Phone size={14} strokeWidth={1.8} />
              Call Sarah
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{
        maxWidth: 560, margin: '0 auto',
        padding: '32px 20px 100px',
      }}>
        {renderStep()}
      </div>

      {/* Footer mark */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        borderTop: `1px solid ${theme.line}`,
        background: theme.bg,
        padding: '10px 20px',
        textAlign: 'center',
        fontFamily: 'IBM Plex Sans, sans-serif',
        fontSize: 11, letterSpacing: '0.08em',
        color: theme.inkMuted,
        textTransform: 'uppercase',
      }}>
        Concept build · PMBRTN × CRS · v0.1
      </div>

      {showHandler && renderHandlerPanel()}
      {showLog && renderLogPanel()}
    </div>
  );
}
