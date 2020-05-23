import React, {useState} from "react";

const hard = /* DON'T LOOK CLOSELY UNLESS YOU WANT TO BE SPOILED!!! */['abdicate','empathy','abate','venerable','exemplary','hackneyed','foster','aberration','clairvoyant','extenuating','mundane','forbearance','fortitude','prudent','hypothesis','ephemeral','scrutinize','capitulate','spurious','substantiate','intuitive','tenacious','digression','prosperity','compromise','vindicate','fraught','submissive','ostentatious','boisterous','bias','impetuous','wary','rancorous','deleterious','amicable','reclusive','canny','superficial','emulate','frugal','perfidious','jubilation','brusque','intrepid','sagacity','arid','inconsequential','nonchalant','reconciliation','brazen','prosaic','pretentious','benevolent','aesthetic','adversity','abhor','divergent','fortuitous','conditional','disdain','demagogue','asylum','compassion','hedonist','condescending','querulous','collaborate','inevitable','discredit','renovation','lobbyist','enervating','provocative','florid','convergence','subtle','diligent','surreptitious','orator','superfluous','opulent','capacious','tactful','longevity','restrained','conformist','abstain','pragmatic','reverence','spontaneous','anachronistic','haughty','procrastinate','parched','camaraderie','precocious','evanescent','impute','transient','predecessor','snorkel','confluence','pyromaniac','remedial','genetic','conventional','digitize','corroborate','ossify','compound','proxy','innovate','harassment','disparage','sufficient','negligence','attache','dubious','mandible','temporary','regret','words','convoluted','adequate','diminish','plausible','necessity','materialistic','abysmal','osteoporosis','diminutive','deficient','capture','nutrition','keen','delirious','laminate','lunatic','succulent','fraternity','loathe','entrenched','effigy','hazardous','foment','dilate','condone','osmosis','hypocrite','reconnaissance','anomaly','counteract','delegate','subsequent','underscore','eccentric','seethe','scallop','decree','asymmetrical','devise','enumerate','precedent','peevish','caricature','prohibit','ridiculous','redact','restitution','dispatch','erratic','juvenile','sacrilegious','saucer','flagrant','feasibility','filament','undermine','reclaim','unveil','maternity','superb','exhilarating','quirk','irreconcilable','chasm','suspicious','garment','typical','fructose','dopamine','coarse','resilient','burble','gorge','rhombus','ambiguous','facilitate','repudiate','adversarial','necromancer','mercenary','jaunt','atavistic','analogous','frock','bodacious','proletariat','sundry','theoretical','lament','contemplate','anticipate','culmination','complement','rebuttal','viper','confide','endow','galvanize','summation','constitution','prosecute','auspices','survival','gregarious','syndicate','quorum','ferocious','surreal','melodramatic','justify','controversial','reinforce','ubiquitous','rustic','virtuous','dilemma','provincial','establish','yearn','catamaran','onset','regurgitate','renounce','obsolete','nimbus','orthogonal','amendment','kleptomaniac','herring','marginal','conducive','invade','coincide','deference','scorn','dignity','complacent','sheath','austere','postulate','coddle','nuisance','jarring','amiable','desolate','worthwhile','condemn','indifferent','stupendous','widget','kinetic','clout','avid','theology','sporadic','cognition','confound','retention','provision','knight','callous','gorgeous','refute','agitate','inundate','qualitative','gargoyle','scandalous','restoration','chronic','dire','validate','quell','cuddle','affluent','momentous','synchronous','reconsider','objective','fraudulent','battlement','malleable','notable','impartial','gremlin','withstand','bevel','virile','petulant','preamble','squalor','fray','lavender','buccaneer','blather','calamity','excel','hypothetical','tedious','demonstrate','nominee','leukemia','supine','flourish','peculiar','fluctuate','easel','palliative','nuptials','asynchronous','undulate','brothel','egregious','hostile','dominion','congregate','vicious','malicious','logarithm','conformity','restructure','stark','dependency','jeopardize','perish','incite','limbic','brawl','diversify','intimate','hegemony','warranty','allegory','diligence','mercurial','tryst','zealot','righteous','reconcile','saber','dapper','inversion','placid','immolate','proffer','unilateral','universal','rambunctious','coordination','recompense','foreseeable','geriatric','candid','secrete','jaded','ramification','persecute','guarantee','devious','invoke','simian','astute','sparingly','concise','surly','bohemian','recite','solidarity','dearth','dilute','quench','iteration','lambaste','sociopath','timorous','valiant','apex','susceptible','comparable','fatigue','remnant','query','marauder','recreation','superlative','bogart','omnipotent','chalice','brevity','hitherto','empirical','brute','narrative','potent','advocate','intone','unprecedented','supercilious','nautical','heritage','cadence','kiosk','quid','novice','yacht','taut','quirky','delusion','grim','recoup','quizzical','unadorned','teeming','conduct','gadget','recumbent','tension','expend','tremendous','providence','navigate','robust','juncture','altercation','wallop','wreckage','intravenous','ambivalent','prow','spawn','demur','convey','demeanor','paramount','bubonic','brackish','ornate','calibrate','substantial','temperament','niche','sumptuous','gruesome','sustain','frankly','loiter','yield','nymph','swivel','oxymoron','emphatic','ostensible','bolus','evoke','capitalize','adhere','conceive','lemur','reform','diabolical','delicate','savvy','contradict','sinister','warrant','litigious','arsenal','bygones','vital','nuance','fragile','articulate','precarious','brunt','jolt','rapture','paddock','conviction','deliberate','adamant','exacerbate','surmount','acquisition','discord','jealous','vigor','allude','nascent','envy','provoke','synthesis','treacherous','oust','emit','ameliorate','paranormal','doctrine','cultivate','blemish','surveillance','abscond','tentative','commission','blithe','reluctant','braggart','bemuse','bumpkin','stature','khaki','eloquent','introvert','granular','cower','karma','ruminate','vintage','iota','insatiable','sublimate','fiscal','accumulate','solvent','hydrogen','competent','salacious','apprehensive','transparent','eminent','ostracize','consensus','horizontal','terse','infer','gauge','contender','prompt','hectare','endure','subordinate','entail','lucrative','exploit','assertion','gargantuan','hence','innate','hoist','juggernaut','concede','locomotion','exert','vestigial','quantitative','election','tabular','candor','astringent','nominal','indiscriminate','viable','reproach','kosher','civic','notorious','jubilant','triumvirate','telemetry','judgemental','billet','dismay','clamour','renovate','imposing','transaction','bolster','prescribe','stationary','irrational','yeti','foist','dreary','novel','quaint','recalcitrant','jovial','responsibility','deplete','pinnacle','fumigate','forage','indulge','zombie','sodium','sage','annihilate','rigorous','zenith','harbinger','cumulative','sentiment','fundamental','principle','collate',]

interface RandomGameProps {
    // pushItemFunc: (item: string) => void;
}

export const RandomGame: React.FC<RandomGameProps> = props => {

    function randomGame() {
        var item = hard[Math.floor(Math.random() * hard.length)];
        var hashed = btoa(item)
        // TODO: do a better join here
        window.location.replace(window.location + hashed);
    }

    return (
        <div>
            <button onClick={randomGame}>
                Generate Random Game
            </button>
        </div>

    );
}