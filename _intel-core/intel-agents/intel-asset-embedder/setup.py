from setuptools import find_packages, setup

setup(
    name="intel_asset_embedder",
    packages=find_packages(exclude=["intel_asset_embedder_tests"]),
    install_requires=[
        "dagster",
        "dagster-cloud"
    ],
    extras_require={"dev": ["dagit", "pytest"]},
)
