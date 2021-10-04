import * as Tone from 'tone';
import { 
  Loop, 
  MembraneSynth, 
  MetalSynth, 
  Sampler, 
  MonoSynth, 
  PluckSynth, 
  PolySynth, 
  NoiseSynth,
  WaveForm,
  Master
} from 'tone';
import { ScaleType } from '@tonaljs/tonal';


export const shuffle = (array) => {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export const generateNote = () => {
  const alphabet = ["A", "B", "C", "D"]
  const numbers = ['1','2','3']
  return alphabet[Math.floor(Math.random() * alphabet.length)]+numbers[Math.floor(Math.random() * numbers.length)]
}
const createSynth = (synthName) => {
  switch(synthName) {
    case 'base':
      return new MembraneSynth().toDestination();
    
    case 'metal':
      return new MetalSynth().toDestination()
    case 'mono': 
      return new MonoSynth().toDestination()
    case 'noise':
      return new NoiseSynth().toDestination()
    case 'pluck':
      return new PluckSynth().toDestination()
    case 'PolySynth': 
      return new PolySynth().toDestination()
    case 'Sampler':
      return new Sampler().toDestination()
  }
}
const song = (time, synthName) => {
  console.log('creating song with', synthName)
    const note = generateNote();
    const synth = createSynth(synthName)
    switch(synthName) {
      case 'pluck':
        return synth.triggerAttack(note, Math.random(0, 10.5))
    }
    synth.triggerAttackRelease(note, '8n', time);

}
export const generateBeats = (note, synth) => {
    const beats = []
    
    for(let i=0; i< 10; i++) {
       beats.push(new Loop((time) => song(time,synth ), note))
    }
    return beats

}


export const getAllScaleNames = () => {
  return ScaleType.names()
}
export const createwave = (width, height) => {
  const wave = new Tone.Waveform();
  Master.connect(wave);
  

}
