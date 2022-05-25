(function() {var implementors = {};
implementors["linfa"] = [];
implementors["linfa_bayes"] = [{"text":"impl&lt;'a, F, L, D, T&gt; <a class=\"trait\" href=\"linfa/traits/trait.FitWith.html\" title=\"trait linfa::traits::FitWith\">FitWith</a>&lt;'a, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;D, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dim/struct.Dim.html\" title=\"struct ndarray::dimension::dim::Dim\">Dim</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/std/primitive.usize.html\">usize</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/std/primitive.array.html\">; 2]</a>&gt;&gt;, T, <a class=\"enum\" href=\"linfa_bayes/enum.NaiveBayesError.html\" title=\"enum linfa_bayes::NaiveBayesError\">NaiveBayesError</a>&gt; for <a class=\"struct\" href=\"linfa_bayes/struct.GaussianNbValidParams.html\" title=\"struct linfa_bayes::GaussianNbValidParams\">GaussianNbValidParams</a>&lt;F, L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"linfa/dataset/trait.Float.html\" title=\"trait linfa::dataset::Float\">Float</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"linfa/dataset/trait.Label.html\" title=\"trait linfa::dataset::Label\">Label</a> + 'a,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/data_traits/trait.Data.html\" title=\"trait ndarray::data_traits::Data\">Data</a>&lt;Elem = F&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"linfa/dataset/trait.AsSingleTargets.html\" title=\"trait linfa::dataset::AsSingleTargets\">AsSingleTargets</a>&lt;Elem = L&gt; + <a class=\"trait\" href=\"linfa/dataset/trait.Labels.html\" title=\"trait linfa::dataset::Labels\">Labels</a>&lt;Elem = L&gt;,&nbsp;</span>","synthetic":false,"types":["linfa_bayes::hyperparams::GaussianNbValidParams"]},{"text":"impl&lt;'a, F, L, D, T&gt; <a class=\"trait\" href=\"linfa/traits/trait.FitWith.html\" title=\"trait linfa::traits::FitWith\">FitWith</a>&lt;'a, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;D, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dim/struct.Dim.html\" title=\"struct ndarray::dimension::dim::Dim\">Dim</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/std/primitive.usize.html\">usize</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/std/primitive.array.html\">; 2]</a>&gt;&gt;, T, <a class=\"enum\" href=\"linfa_bayes/enum.NaiveBayesError.html\" title=\"enum linfa_bayes::NaiveBayesError\">NaiveBayesError</a>&gt; for <a class=\"struct\" href=\"linfa_bayes/struct.MultinomialNbValidParams.html\" title=\"struct linfa_bayes::MultinomialNbValidParams\">MultinomialNbValidParams</a>&lt;F, L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"linfa/dataset/trait.Float.html\" title=\"trait linfa::dataset::Float\">Float</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"linfa/dataset/trait.Label.html\" title=\"trait linfa::dataset::Label\">Label</a> + 'a,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/data_traits/trait.Data.html\" title=\"trait ndarray::data_traits::Data\">Data</a>&lt;Elem = F&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"linfa/dataset/trait.AsSingleTargets.html\" title=\"trait linfa::dataset::AsSingleTargets\">AsSingleTargets</a>&lt;Elem = L&gt; + <a class=\"trait\" href=\"linfa/dataset/trait.Labels.html\" title=\"trait linfa::dataset::Labels\">Labels</a>&lt;Elem = L&gt;,&nbsp;</span>","synthetic":false,"types":["linfa_bayes::hyperparams::MultinomialNbValidParams"]}];
implementors["linfa_clustering"] = [{"text":"impl&lt;'a, F:&nbsp;<a class=\"trait\" href=\"linfa/dataset/trait.Float.html\" title=\"trait linfa::dataset::Float\">Float</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, R:&nbsp;<a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/rng/trait.Rng.html\" title=\"trait rand::rng::Rng\">Rng</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, DA:&nbsp;<a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/data_traits/trait.Data.html\" title=\"trait ndarray::data_traits::Data\">Data</a>&lt;Elem = F&gt;, T, D:&nbsp;'a + <a class=\"trait\" href=\"linfa_nn/distance/trait.Distance.html\" title=\"trait linfa_nn::distance::Distance\">Distance</a>&lt;F&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"linfa/traits/trait.FitWith.html\" title=\"trait linfa::traits::FitWith\">FitWith</a>&lt;'a, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;DA, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dim/struct.Dim.html\" title=\"struct ndarray::dimension::dim::Dim\">Dim</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/std/primitive.usize.html\">usize</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/std/primitive.array.html\">; 2]</a>&gt;&gt;, T, <a class=\"enum\" href=\"linfa_clustering/enum.IncrKMeansError.html\" title=\"enum linfa_clustering::IncrKMeansError\">IncrKMeansError</a>&lt;<a class=\"struct\" href=\"linfa_clustering/struct.KMeans.html\" title=\"struct linfa_clustering::KMeans\">KMeans</a>&lt;F, D&gt;&gt;&gt; for <a class=\"struct\" href=\"linfa_clustering/struct.KMeansValidParams.html\" title=\"struct linfa_clustering::KMeansValidParams\">KMeansValidParams</a>&lt;F, R, D&gt;","synthetic":false,"types":["linfa_clustering::k_means::hyperparams::KMeansValidParams"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()