async function generate_text(model, idx2char, char2idx, generated_text, start_string = 'ROMEO:', num_generate = 1000, temperature = 0.1) {
  let input_eval = start_string.split('').map(s => char2idx[s]);
  input_eval = tf.tensor1d(input_eval);
  input_eval = tf.reshape(input_eval, [1, input_eval.size]);

  let text_generated = [];

	generated_text.value = start_string + "\n"

  model.resetStates();
  for (let i = 0; i < num_generate; i++) {
    let predictions = model.predict(input_eval);
    predictions = predictions.squeeze();
    predictions = predictions.div(temperature);
    let predicted_id = await tf.multinomial(predictions, 1).dataSync()[0];
		input_eval = tf.expandDims([predicted_id], 0);
		generated_text.value = generated_text.value + idx2char[predicted_id]
		await new Promise(resolve => setTimeout(resolve, 5));
	}
}

async function runModel(num_generate) {

	generated_text = document.getElementById("generated_text")
	char2idx = {'\n': 0, ' ': 1, '!': 2, '$': 3, '&': 4, "'": 5, ',': 6, '-': 7, '.': 8, '3': 9, ':': 10, ';': 11, '?': 12, 'A': 13, 'B': 14, 'C': 15, 'D': 16, 'E': 17, 'F': 18, 'G': 19, 'H': 20, 'I': 21, 'J': 22, 'K': 23, 'L': 24, 'M': 25, 'N': 26, 'O': 27, 'P': 28, 'Q': 29, 'R': 30, 'S': 31, 'T': 32, 'U': 33, 'V': 34, 'W': 35, 'X': 36, 'Y': 37, 'Z': 38, 'a': 39, 'b': 40, 'c': 41, 'd': 42, 'e': 43, 'f': 44, 'g': 45, 'h': 46, 'i': 47, 'j': 48, 'k': 49, 'l': 50, 'm': 51, 'n': 52, 'o': 53, 'p': 54, 'q': 55, 'r': 56, 's': 57, 't': 58, 'u': 59, 'v': 60, 'w': 61, 'x': 62, 'y': 63, 'z': 64}

	idx2char = ['\n', ' ', '!', '$', '&', "'", ',', '-', '.', '3', ':', ';', '?', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
	const model = await tf.loadLayersModel('/projects/tensorspeare/jsmodel/model.json');
	generate_text(model, idx2char, char2idx, generated_text, num_generate=num_generate);
}
