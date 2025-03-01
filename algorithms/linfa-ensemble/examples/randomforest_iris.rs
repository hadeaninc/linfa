use linfa::prelude::{Fit, Predict, ToConfusionMatrix};
use linfa_ensemble::{EnsembleLearnerParams};
use linfa_trees::DecisionTree;
use ndarray_rand::rand::SeedableRng;
use rand::rngs::SmallRng;

fn main() {
    //Number of models in the ensemble
    let ensemble_size = 100;
    //Proportion of training data given to each model
    let bootstrap_proportion = 0.7;

    //Create ensemble learner
    let mut learner = EnsembleLearnerParams::new();
    learner
        .ensemble_size(ensemble_size)
        .bootstrap_proportion(bootstrap_proportion)
        .model_params(DecisionTree::params());

    //Load dataset
    let mut rng = SmallRng::seed_from_u64(42);
    let (train, test) = linfa_datasets::iris()
        .shuffle(&mut rng)
        .split_with_ratio(0.8);

    //Train ensemble learner model
    let model = learner.fit(&train).unwrap();

    //Return highest ranking predictions
    let final_predictions_ensemble = model.predict(&test);
    println!("Final Predictions: \n{:?}", final_predictions_ensemble);

    let cm = final_predictions_ensemble.confusion_matrix(&test).unwrap();

    println!("{:?}", cm);
    println!("Test accuracy with default Decision Tree params, Ensemble Size {}, Bootstrap Proportion {}: {}",
                ensemble_size, bootstrap_proportion, 100.0 * cm.accuracy());
}
